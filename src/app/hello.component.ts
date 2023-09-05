import { Component, Input } from "@angular/core";

@Component({
    selector: 'hello',
    template: `<span> Hello</span>`
})

export class HelloComponent {

    // @Input() name: string;
    
    ngOnInit() {
        console.log("Hello init");
    }

    ngOnDestroy() {
        console.log("Hello destroy");
    }
    
}