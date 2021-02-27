import SearchPage from '../pageobjects/search.page';
import resources from '../resources';
import { waitForTextChange } from '../utilities/helper';
import allureReporter from '@wdio/allure-reporter';

describe('Ebay Product Search', () => {
    it('should open the main url and verify the title', () => {
        SearchPage.open();
        expect(browser).toHaveTitle(resources.homeTitle);
    });

    it('should search for a product and verify the sarch text value',() => {
        allureReporter.addSeverity('Critical')
       SearchPage.searchInput.addValue('Laptop');
       SearchPage.searchBtn.click();
       
       expect(SearchPage.searchInput).toHaveValue('Laptop');
    });

    it('should redirect to a new page and verify the title', () => {
        expect(browser).toHaveTitle(resources.laptopTitle);

    });

    it('should update the search category', () => {
        allureReporter.addFeature('search category');
        waitForTextChange(SearchPage.category, resources.laptopAndNotebook, 3000);
        expect(SearchPage.category).toHaveText(resources.laptopAndNotebook)
    });
});
