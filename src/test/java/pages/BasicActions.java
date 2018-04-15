package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BasicActions {

    public static final int TIME_OUT = 12;

    public WebDriver driver;

    public WebDriverWait wait;

    public static final Logger LOGGER = LoggerFactory.getLogger(BasicActions.class);

    public BasicActions(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(new AjaxElementLocatorFactory(driver, TIME_OUT), this);
        wait = new WebDriverWait(driver, TIME_OUT);
    }

    public void checkElementPresent (WebElement element, String elementName) {
        LOGGER.info("Checking presence of element: " + elementName + ".");
        wait.until(ExpectedConditions.visibilityOf(element));
        LOGGER.info("Done.");
    }


    public void clear (WebElement element, String elementName) {
        LOGGER.info("Clearing element: " + elementName + ".");
        element.clear();
        LOGGER.info("Done.");
    }

    public void click (WebElement element, String elementName) {
        LOGGER.info("Clicking on element: " + elementName + ".");
        element.click();
        LOGGER.info("Done.");

    }

    public WebDriver getDriver() {
        return driver;
    }

    public void sendKeys (WebElement element, String fillWith, String elementName) {
        LOGGER.info("Sending keys : " + fillWith + " into element: " + elementName + ".");
        element.sendKeys(fillWith);
        LOGGER.info("Done.");
    }

  public void waitForVisibility(WebElement element, String elementName) {
    LOGGER.info("Waiting for visibility of element : " + elementName + ".");
    wait.until( ExpectedConditions.visibilityOf(element) );
    LOGGER.info( "Done." );
  }

}
