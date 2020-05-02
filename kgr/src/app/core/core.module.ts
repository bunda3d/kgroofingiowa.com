import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import { ThemeService } from './services/theme.service';
import { Injectable } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HammerModule,
    Injectable
  ],
  providers: [
    ThemeService
  ],
  exports: [
    CommonModule
  ]
})
export class CoreModule { }
