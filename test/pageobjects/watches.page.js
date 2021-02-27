import Page from './page';

class WatchesPage extends Page {
    get promoBanner() {
        return $('section.b-promobanner._FCF2BD5C1B05');
    }
    get infoTitle() {
        return $('section.b-promobanner._FCF2BD5C1B05 .b-promobanner__info-title');
    }
    get promoBtn() {
        return $('section.b-promobanner._FCF2BD5C1B05 .b-promobanner__info-btn');
    }
    get WatchesCategoryList() {
        return $$('section[id="s0-16-13-0-1[0]-0-0"] ul li');
    }
    get fashionLink() {
        return $$('.hl-cat-nav__js-tab a[href*="Fashion"]')[0];
    }
    get WatchesLink() {
        return $('.hl-cat-nav__sub-cat-col a[href*="Watches-Parts"]');
    }

    open() {
        super.open('/');
    }

    getWatchesCategoryListText() {
        const Watcheslist = [];
        this.WatchesCategoryList.map((element) => 
            Watcheslist.push(element.getText())
        );
        return Watcheslist;
    }
}

export default new WatchesPage();