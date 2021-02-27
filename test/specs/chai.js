import{ expect as chaiExpect, assert } from 'chai';
import 'chai/register-should';



describe('Watches Page', () => {
    it('should contain banner container', () => {
        browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
        const promoBanner = $('section.b-promobanner._FCF2BD5C1B05');
        expect(promoBanner).toBeDisplayed();
    });

    it('should show the banner title', () => {
        const infoTitle = $('section.b-promobanner._FCF2BD5C1B05 .b-promobanner__info-title');
        const infoTitleText = infoTitle.getText();
        expect(infoTitle).toHaveTextContaining('30% off');
        chaiExpect(infoTitleText).to.not.be.empty;
        infoTitle.should.not.be.empty;
        assert.isNotEmpty(infoTitleText);
    });
     
    it('should contain link on banner button and verify its clickable', () => {
        const promoButton = $('section.b-promobanner._FCF2BD5C1B05 .b-promobanner__info-btn');
        const tag = promoButton.getTagName();

        expect(promoButton).toHaveLinkContaining('/fashion/');
        expect(promoButton).toBeClickable();
        chaiExpect(tag).to.equal('a');
        tag.should.be.equal('a');

    });

    it('should click on promo button and verify new url', () => {
        const promoButton = $('section.b-promobanner._FCF2BD5C1B05 .b-promobanner__info-btn');
        promoButton.click();
        
        const url = browser.getUrl();
        chaiExpect(url).to.include('/fashion/');
        
    });
});