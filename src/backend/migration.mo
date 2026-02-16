module {
  type Inquiry = {
    timestamp : Int;
    name : Text;
    company : Text;
    country : Text;
    email : Text;
    whatsapp : Text;
    category : Text;
    message : Text;
  };

  type OldActor = {
    inquiries : [Inquiry];
  };

  type NewActor = {
    inquiries : [Inquiry];
  };

  public func run(old : OldActor) : NewActor {
    { inquiries = old.inquiries };
  };
};
