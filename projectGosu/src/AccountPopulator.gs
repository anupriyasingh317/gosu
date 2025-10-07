package gw.account

uses gw.api.system.PLDependenciesGateway
uses gw.pl.persistence.core.Bundle

uses java.util.Date

/**
 * Contains the fields used to create a new Account object.
 * An AccountPopulator pulls its fields from an AccountSearchCriteria.
 * It's the mechanism we use to formally control which fields are copied
 * from a new account *search* to an actual new Account.
 */
@Export
class AccountPopulator {

  var _firstName : String
  var _firstNameKanji : String
  var _lastName : String





  function createNewAccount(bundle : Bundle, contactType : ContactType) : Account {
    var account = Account.createAccountForContactType(bundle, contactType)
    account.OriginationDate = Date.Today
    populateContact(account.AccountHolder.AccountContact.Contact)
    account.updateAccountHolderContact()
    return account
  }

  private function populateContact(contact : Contact) {
    var idType : OfficialIDType
    if (contact typeis Person) {
      var person = contact
      person.FirstName = _firstName
      person.FirstNameKanji = _firstNameKanji
      person.LastName = _lastName
      person.LastNameKanji = _lastNameKanji
      idType = OfficialIDType.TC_SSN
    } else {
      contact.Name = _companyName
      contact.NameKanji = _companyNameKanji
      idType = OfficialIDType.TC_FEIN
    }
    contact.setOfficialID(idType, _officialId)
    contact.WorkPhone = _workPhone
    contact.PrimaryAddress = new Address()
    var address = contact.PrimaryAddress
    address.AddressLine1 = _addressLine1
    address.AddressLine1Kanji = _addressLine1Kanji
    address.AddressLine2 = _addressLine2
   
  }

}