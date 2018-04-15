package GlueCode;

import TestRunners.TestDefaultValues;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class GeneralStepDefinitions {

    public static WebDriver driver;
    private String operatingSystem = TestDefaultValues.getOperatingSystem();
    private String browser = TestDefaultValues.getBrowser();
    private String link = TestDefaultValues.getLink();

    @Before
    public void openBrowserWithLink() {
        switch (browser) {
            case "Firefox" :
                if (operatingSystem.equalsIgnoreCase("Windows")) {
                    System.setProperty("webdriver.gecko.driver", "src/test/resources/drivers/" + operatingSystem + "/geckodriver.exe");
                } else {
                    System.setProperty("webdriver.gecko.driver", "src/test/resources/drivers/" + operatingSystem + "/geckodriver");
                }
                driver = new FirefoxDriver();
                break;
            case "Chrome" :
                if (operatingSystem.equalsIgnoreCase("Windows")) {
                    System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/" + operatingSystem + "/chromedriver.exe");
                } else {
                    System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/" + operatingSystem + "/chromedriver");
                }
                driver = new ChromeDriver();
                break;
        }
        driver.get(link);
    }

    @After
    public void closeBrowser() {
        driver.quit();
    }

    public static WebDriver getDriver() {
        return driver;
    }

}
