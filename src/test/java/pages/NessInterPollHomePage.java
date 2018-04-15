package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class NessInterPollHomePage extends BasicActions {


  @FindBy(xpath = "(//button[@tabindex = '0'])[1]")
  private WebElement pollNameLiveHamburgerMenu;

  @FindBy (xpath = "//span[@role='menuitem']/div[contains (.,'Stats')]")
  private WebElement NameLiveHamburgerMenuStatsOption;

  @FindBy (xpath = "//span[@role='menuitem']/div[contains (.,'Edit')]")
  private WebElement NameLiveHamburgerMenuEditOption;

  @FindBy (xpath = "//span[@role='menuitem']/div[contains (.,'Delete')]")
  private WebElement NameLiveHamburgerMenuDeleteOption;

  public NessInterPollHomePage(WebDriver driver) {
    super(driver);
  }

  public NessInterPollHomePage clickOnPollNameLiveHamburgerMenu () {
    click(pollNameLiveHamburgerMenu, "pollNameLiveHamburgerMenu");
    return this;
  }

  public NessInterPollHomePage validatePollNameLiveHamburgerMenuStatsOption () {
    waitForVisibility(NameLiveHamburgerMenuStatsOption, "NameLiveHamburgerMenuStatsOption");
    return this;
  }

  public NessInterPollHomePage validatePollNameLiveHamburgerMenuEditOption () {
    waitForVisibility(NameLiveHamburgerMenuEditOption, "NameLiveHamburgerMenuEditOption");
    return this;
  }

  public NessInterPollHomePage validatePollNameLiveHamburgerMenuDeleteOption () {
    waitForVisibility(NameLiveHamburgerMenuDeleteOption, "NameLiveHamburgerMenuDeleteOption");
    return this;
  }





}
