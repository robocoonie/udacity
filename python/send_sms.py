from twilio.rest import TwilioRestClient
 
# Your Account Sid and Auth Token from twilio.com/user/account
account_sid = "ACfea4b28aae19c6c770f300aaa5812ae8"
auth_token  = "31a8898eb3f5ce905296871a61a1288b"
client = TwilioRestClient(account_sid, auth_token)
 
message = client.messages.create(body="Incoming from Celestia Comm: Good Morning Dr. Almodovar!",
    to="+15623600451",    # Replace with your phone number
    from_="+17144655649") # Replace with your Twilio number
print message.sid
