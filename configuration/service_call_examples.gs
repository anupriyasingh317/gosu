package gw.sample

uses gw.api.util.StringUtil
uses gw.util.Logger
uses gw.webservice.WebService
uses gw.integration.IntegrationAPI
uses gw.util.RestClient

class ServiceCallExamples {

  function makeServiceCalls() {
    // Pattern 1: UserService.getUser()
    var user = UserService.getUser("john.doe")

    // Pattern 2: WebService.invoke()
    var result = WebService.invoke("getCustomerDetails")

    // Pattern 3: IntegrationAPI.sendDocument()
    IntegrationAPI.sendDocument(document)

    // Pattern 4: emailClient.call()
    var response = emailClient.call("sendEmail", emailData)

    // Pattern 5: paymentGateway.invoke()
    paymentGateway.invoke("processPayment", paymentInfo)

    // Pattern 6: notificationService.send()
    notificationService.send("WelcomeEmail", user)

    // Pattern 7: new UserService()
    var userService = new UserService("config")

    // Pattern 8: httpClient.post() with JSON body
    var json = {"name": "John", "age": 30}
    httpClient.post("/api/submit", json)

    // Pattern 9: RestClient.post()
    RestClient.post("/documents", docPayload)

    // Pattern 10: apiClient.get/post/put/delete/patch()
    apiClient.get("/users")
    apiClient.post("/users", userData)
    apiClient.put("/users/123", updatedData)
    apiClient.delete("/users/123")
    apiClient.patch("/users/123", patchData)
  }
}
