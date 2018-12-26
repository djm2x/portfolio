import { Component, OnInit, HostBinding, ChangeDetectorRef, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @HostBinding('class.default-theme') defaultTheme = true;
  @HostBinding('class.dark-theme') darkTheme = false;
  @ViewChild('div') divHTML: ElementRef;
  mobileQuery: MediaQueryList;
  currentSection = 'section1';
  userImg = '../assets/artisant.jpg';
  constructor(private overlayContainer: OverlayContainer, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    // define the limite size
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    // mobileQuery.matches is listen for the size
    // wa can now use mobileQuery.matches booleen in the template
    this.mobileQuery.addListener((e: MediaQueryListEvent) => changeDetectorRef.detectChanges());
  }
  ngOnInit(): void {
    this.themeForBtnNav('default-theme');
  }


  onSectionChange(sectionId) {
    this.currentSection = sectionId;
    console.log(this.currentSection);
  }

  // setColorToButton(section: string): string {
  //   return (this.currentSection === section) ? 'accent' : '';
  // }

  scrollTo(section: string) {
    document.querySelector('#' + section).scrollIntoView();
    this.currentSection = section;
  }

  toggleSideNave() {
    this.divHTML.nativeElement.click();
  }

  changeTheme(theme) {
    switch (theme) {
      case 'dark-theme':
        console.log('>>>>>>>>>>>>>');
        this.defaultTheme = false;
        this.darkTheme = true;
        break;
      default:
        this.darkTheme = false;
        this.defaultTheme = true;
        break;
    }
    this.themeForBtnNav(theme);
  }

  themeForBtnNav(theme) {
    // this.themeClass = theme;
    const classList = this.overlayContainer.getContainerElement().classList;
    const toRemove = Array.from(classList).filter((item: string) => item.includes('-theme'));
    if (toRemove.length) {
      classList.remove(...toRemove);
    }
    classList.add(theme);
  }
}

// firebase use mourabit-mohamed
// firebase init
// firebase deploy
