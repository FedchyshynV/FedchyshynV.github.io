import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-staight-pasword-indicator',
  templateUrl: './staight-pasword-indicator.component.html',
  styleUrls: ['./staight-pasword-indicator.component.css'],

})
export class StaightPaswordIndicatorComponent {

  //constructor(httpService: HttpService) { }

  public onKey() {
    return this.currentSrtaight = this.checPasswordStraingts(this.password)
  }

  checPasswordStraingts(pass: string) {
    if (!pass) return 0
    let strength = pass.length / 2

    const digitMatch = pass.match(/\d+/g)
    const capitalMatch = pass.match(/[A-Z]/g)

    if (digitMatch) strength += digitMatch.length
    if (capitalMatch) strength += capitalMatch.length

    return (strength <= 0) ? 1 : (strength > 12) ? 12 : strength
  }

  colors = ["red", "orange", "green"]

  get color() {
    return this.colors[Math.ceil(this.currentSrtaight / 4) - 1]
  }
  get inputType() {
    return this.showPassword ? "text" : "password"
  }

  currentSrtaight: number = 0
  straights = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  password: string = ""
  showPassword: false
}



