import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  /**
   * It allows the user to type only numbers
   *
   * @param e Keypress event
   */
  public allowOnlyNumber(e) {
    // const pattern = /[0-9\+\-\ ]/;
    const pattern = /[0-9]/;
    this.preventKeyPress(pattern, e);
  }
  /**
   * It allows the user to type only numbers
   *
   * @param e Keypress event
   */
  public allowOnlyFloatNumber(e) {
    const pattern = /[0-9.]/;
    this.preventKeyPress(pattern, e);
  }
public allowOnlyStringWithHyphen(e){
  const pattern = /[a-zA-Z-.'\s]$/;
  this.preventKeyPress(pattern, e);
}
  /**
   * It allows the user to type only strings
   * @param e Keypress event
   */
  public allowOnlyString(e) {
    const pattern = /[a-zA-Z.'\s]$/;
    this.preventKeyPress(pattern, e);
  }

  /**
   * It allows alphanumberic
   * @param pattern
   * @param e
   */
  public allowAlphaNumericString(e) {
    const pattern = /[a-zA-Z0-9.'\s]$/;
    this.preventKeyPress(pattern, e);
  }

  public folderName(e) {
    const pattern = /[a-zA-Z0-9\s]$/;
    this.preventKeyPress(pattern, e);
  }

  /**
   * It prevents the keypress when the regex pattern doesn't match
   *
   * @param pattern regex pattern
   * @param e keypress event
   */
  public preventKeyPress(pattern, e) {
    if (e.charCode === 13) { return; }

    const inputChar = String.fromCharCode(e.charCode);

    if (!pattern.test(inputChar)) {
      e.preventDefault();
    }

  }

  /**
   * It prevents the paste event if the regex pattern doesn't match
   * @param e
   */

  public allowNumberOnPaste(e) {
    const pattern = /[0-9]/;
    const value = e.clipboardData.getData('Text');
    if (!pattern.test(value)) {
      e.preventDefault();
    }
  }
  public allowStringOnPaste(e) {
    const pattern = /[a-zA-Z.'\s]$/;
    const value = e.clipboardData.getData('Text');
    if (!pattern.test(value)) {
      e.preventDefault();
    }
  }


}
