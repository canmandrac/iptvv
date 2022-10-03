import { Component } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "iptv";
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    navSpeed: 700,
    navText: [" < ", " > "],
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    nav: true,
  };

  scroll(id: string) {
    let el = document.getElementById(id);
    setTimeout(() => {
      window.scrollTo({ top: el["offsetTop"] - 50, behavior: "smooth" });
    }, 0);
  }
}
