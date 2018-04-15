package GlueCode;

import TestRunners.TestDefaultValues;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import pages.NessInterPollHomePage;


public class NessInterPollStepDefinitions {

    private String email = TestDefaultValues.getUser();
    private String password = TestDefaultValues.getPassword();
    private WebDriver driver = GeneralStepDefinitions.getDriver();
    private NessInterPollHomePage nessInterPollHomePage;


  @When("^I open Poll Name Live hamburger menu$")
  public void openPollNameLiveHamburgerMenu() throws Throwable {
    nessInterPollHomePage = new NessInterPollHomePage(driver);
    nessInterPollHomePage.clickOnPollNameLiveHamburgerMenu();
   }

  @When("^Stats option is available$")
  public void checkAvailabilityOfStatsOptionInPollNameLive() throws Throwable {
    nessInterPollHomePage.validatePollNameLiveHamburgerMenuStatsOption();
  }

  @When("^Edit option is available$")
  public void checkAvailabilityOfEditOptionInPollNameLive() throws Throwable {
    nessInterPollHomePage.validatePollNameLiveHamburgerMenuEditOption();
  }

  @When("^Delete option is available$")
  public void checkAvailabilityOfDeleteOptionInPollNameLive() throws Throwable {
    nessInterPollHomePage.validatePollNameLiveHamburgerMenuDeleteOption();
  }



}
