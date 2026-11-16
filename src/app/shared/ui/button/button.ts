import { Component, input } from '@angular/core';

export type ButtonVariant = 'primary' | 'outline' | 'dark';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  public readonly variant = input<ButtonVariant>('primary');
  public readonly withSymbol = input(false);
  public readonly symbol = input('+');
  public readonly type = input<ButtonType>('button');
  public readonly disabled = input(false);
}
