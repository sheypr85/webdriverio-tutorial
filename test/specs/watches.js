import{ expect as chaiExpect } from 'chai';
import WatchesPage from '../pageobjects/watches.page'
import resources from '../resources';
import { waitAndClick } from '../utilities/helper';


describe('Watches Page', () => {
    before(() => {
        WatchesPage.open();
        WatchesPage.fashionLink.moveTo();
        // browser.pause(1000) //implicit wait
        waitAndClick(WatchesPage.WatchesLink,3000); //Explicit Wait
    });

   it('should verify the watches category list', () => {
        const WatchesCategoryList = WatchesPage.getWatchesCategoryListText();
        chaiExpect(WatchesCategoryList).to.deep.equal(resources.watchesCategoryList);
   });

    it('should contain banner container', () => {
   
        expect(WatchesPage.promoBanner).toBeDisplayed();
    });

    it('should show the banner title', () => {
        expect(WatchesPage.infoTitle).toHaveTextContaining('30% off')
    });
     
    it('should contain link on banner button and verify its clickable', () => {
        expect(WatchesPage.promoBtn).toHaveLinkContaining('/fashion/');
        expect(WatchesPage.promoBtn).toBeClickable();

    });

    it('should click on promo button and verify new url', () => {
        WatchesPage.promoBtn.click();

        const url = browser.getUrl();
        chaiExpect(url).to.include('/fashion/');
    });
});