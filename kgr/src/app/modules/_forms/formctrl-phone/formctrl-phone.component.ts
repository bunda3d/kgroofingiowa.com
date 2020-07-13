import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Input, OnDestroy, Optional, Self } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	ControlValueAccessor,
	NgControl,
	Validators
} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';

/** @title Form field with custom telephone number input control. */
@Component({
	selector: 'app-formctrl-phone',
	templateUrl: './formctrl-phone.component.html',
	styleUrls: ['./formctrl-phone.component.scss']
})
export class FormctrlPhoneComponent {}

/** Data structure for holding telephone number. */
export class MyTel {
	constructor(public area: string, public exchange: string, public subscriber: string) {}
}

/** Custom `MatFormFieldControl` for telephone number input. */
@Component({
	selector: 'input-phone',
	templateUrl: './input-phone.html',
	styleUrls: ['./input-phone.scss'],
	providers: [{ provide: MatFormFieldControl, useExisting: InputPhoneNum }],
	host: {
		'[class.floating]': 'shouldLabelFloat',
		'[id]': 'id',
		'[attr.aria-describedby]': 'describedBy'
	}
})
export class InputPhoneNum
	implements ControlValueAccessor, MatFormFieldControl<MyTel>, OnDestroy {
	static nextId = 0;

	parts: FormGroup;
	stateChanges = new Subject<void>();
	focused = false;
	errorState = false;
	controlType = 'input-phone';
	id = `input-phone-${InputPhoneNum.nextId++}`;
	describedBy = '';
	onChange = (_: any) => {};
	onTouched = () => {};

	get empty() {
		const {
			value: { area, exchange, subscriber }
		} = this.parts;

		return !area && !exchange && !subscriber;
	}

	get shouldLabelFloat() {
		return this.focused || !this.empty;
	}

	@Input()
	get placeholder(): string {
		return this._placeholder;
	}
	set placeholder(value: string) {
		this._placeholder = value;
		this.stateChanges.next();
	}
	private _placeholder: string;

	@Input()
	get required(): boolean {
		return this._required;
	}
	set required(value: boolean) {
		this._required = coerceBooleanProperty(value);
		this.stateChanges.next();
	}
	private _required = false;

	@Input()
	get disabled(): boolean {
		return this._disabled;
	}
	set disabled(value: boolean) {
		this._disabled = coerceBooleanProperty(value);
		this._disabled ? this.parts.disable() : this.parts.enable();
		this.stateChanges.next();
	}
	private _disabled = false;

	@Input()
	get value(): MyTel | null {
		if (this.parts.valid) {
			const {
				value: { area, exchange, subscriber }
			} = this.parts;
			return new MyTel(area, exchange, subscriber);
		}
		return null;
	}
	set value(tel: MyTel | null) {
		const { area, exchange, subscriber } = tel || new MyTel('', '', '');
		this.parts.setValue({ area, exchange, subscriber });
		this.stateChanges.next();
	}

	constructor(
		formBuilder: FormBuilder,
		private _focusMonitor: FocusMonitor,
		private _elementRef: ElementRef<HTMLElement>,
		@Optional() @Self() public ngControl: NgControl
	) {
		this.parts = formBuilder.group({
			area: [
				null,
				[Validators.required, Validators.minLength(3), Validators.maxLength(3)]
			],
			exchange: [
				null,
				[Validators.required, Validators.minLength(3), Validators.maxLength(3)]
			],
			subscriber: [
				null,
				[Validators.required, Validators.minLength(4), Validators.maxLength(4)]
			]
		});

		_focusMonitor.monitor(_elementRef, true).subscribe(origin => {
			if (this.focused && !origin) {
				this.onTouched();
			}
			this.focused = !!origin;
			this.stateChanges.next();
		});

		if (this.ngControl != null) {
			this.ngControl.valueAccessor = this;
		}
	}

	ngOnDestroy() {
		this.stateChanges.complete();
		this._focusMonitor.stopMonitoring(this._elementRef);
	}

	setDescribedByIds(ids: string[]) {
		this.describedBy = ids.join(' ');
	}

	onContainerClick(event: MouseEvent) {
		if ((event.target as Element).tagName.toLowerCase() != 'input') {
			this._elementRef.nativeElement.querySelector('input')!.focus();
		}
	}

	writeValue(tel: MyTel | null): void {
		this.value = tel;
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	_handleInput(): void {
		this.onChange(this.value);
	}

	static ngAcceptInputType_disabled: boolean | string | null | undefined;
	static ngAcceptInputType_required: boolean | string | null | undefined;
}
