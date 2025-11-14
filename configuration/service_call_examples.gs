package gw.sample

uses gw.api.util.StringUtil
uses gw.util.Logger
uses gw.webservice.WebService
uses gw.integration.IntegrationAPI
uses gw.util.RestClient

class ServiceCallExamples {

  function makeServiceCalls() {
   
    var user = UserService.getUser("john.doe")

   
    var result = WebService.invoke("getCustomerDetails")

   
    IntegrationAPI.sendDocument(document)

    
    var response = emailClient.call("sendEmail", emailData)

    
    paymentGateway.invoke("processPayment", paymentInfo)

    
    notificationService.send("WelcomeEmail", user)


    var userService = new UserService("config")

   
    var json = {"name": "John", "age": 30}
    httpClient.post("/api/submit", json)

   
    RestClient.post("/documents", docPayload)

  
    apiClient.get("/users")
    apiClient.post("/users", userData)
    apiClient.put("/users/123", updatedData)
    apiClient.delete("/users/123")
    apiClient.patch("/users/123", patchData)
  }
}
