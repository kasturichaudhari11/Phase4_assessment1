import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[colorchanger]'
})
export class ColorChanger {

    private defaultColor='white'

    @HostListener('mouseover')
    addColor()
    {
        this.defaultColor = 'orange'
    }

    @HostListener('mouseleave')
    removeColor()
    {
        this.defaultColor = 'white'
    }

    @HostBinding('style.backgroundColor')
    get applyStyles()
    {
        return this.defaultColor
    }

}


