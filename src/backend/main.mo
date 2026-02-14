import Text "mo:core/Text";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";

actor {
  public type Inquiry = {
    timestamp : Time.Time;
    name : Text;
    company : Text;
    country : Text;
    email : Text;
    whatsapp : Text;
    category : Text;
    message : Text;
  };

  var inquiries : [Inquiry] = [];

  public shared ({ caller }) func submitInquiry(name : Text, company : Text, country : Text, email : Text, whatsapp : Text, category : Text, message : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or message.isEmpty()) {
      Runtime.trap("Empty input field. Please fill in all required fields.");
    };

    let inquiry : Inquiry = {
      timestamp = Time.now();
      name;
      company;
      country;
      email;
      whatsapp;
      category;
      message;
    };

    inquiries := inquiries.concat([inquiry]);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries;
  };
};
