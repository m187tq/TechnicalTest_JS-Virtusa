Feature: The Lloydsbank Website
  As a user,
  User should be able to navigate pages
  In order to view current accounts and associated fees

  Scenario: User should be able to navigate from home to current accounts page to view current accounts
    Given User is on the Home page url as "https://www.lloydsbank.com/" and title as "Lloyds Bank - Personal Banking, Personal Finances & Bank Accounts"
    When User hover over Products and Services tab and should be able to see the dropdown list
    Then User click on Current Accounts from the dropdown
    And User is on current accounts page and verifies page url and title as includes"https://www.lloydsbank.com/current-accounts.html" and "Open a Current Account Online | UK Bank Accounts | Lloyds Bank" respectively
    And User verify current account products as "Classic account" and "Club Lloyds account" and "Platinum account" are displayed
    And User validates "£21 monthly fee" for maintaining Platinum account
