/*
    Overriding
    -> memperbolehkan subclass mendefenisikan implementasinya sendiri pada sebuah
    method yang sebenarnya sudah didefinisikan pada superclass-nya.

*/

// constructor overriding
class MailService {
  constructor(sender) {
    this.sender = sender;
  }
}

class WhatsAppService extends MailService {
  // overriding constructor
  constructor(sender, isBusiness) {
    super(sender); // memanggil method super().

    this.isBusiness = isBusiness;
  }
}

/* 
satu hal yang penting dalam penerapan constructor overriding adalah jangan sampai
lupa untuk memanggil method super().
*/

// Method Overriding
/* -> Cara memanggil method pada subclass mirip seperti override
constructor, tetapi kita tidak perlu memanggil method super di dalamnya.
*/

class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }

  // overriding Method
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver} via whatsApp`);
  }
}

const mailService = new MailService('someSender');
const WhatsAppService = new WhatsAppService('+6285267516715', true);

mailService.sendMessage('Hai, apa kabar?', 'someReceiver');
WhatsAppService.sendMessage('Hai, apa kabar?', '+62878767576');