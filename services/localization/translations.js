import LocalizedStrings from 'react-native-localization';
export const DEFAULT_LANGUAGE = 'en';

const translations = {
  en:{
    USERNAME: 'Username',
    PASSWD: 'Password',
    B_LOGIN: 'Login',
    REGISTER:'Register',
    REGISTER_LINK: "Don't have an account? Click here to register.",
    MY_NOTES: 'My Notes',
    INFO: 'Info',
    DELETE_CONFIRM:'Are you sure you want to delete this note?',
    NO:'No',
    YES:'Yes',
    TITLE:'Title',
    CONTENT:'Content',
    LOCATION:'Location',
    UPDATE_NOTE:'Update Note',
    REMOVE_NOTE:'Remove Note',
    ENTER_TITLE:'Enter a title',
    TYPE_NOTE:'Type your note',
    INSERT_CITY:'Insert a City',
    ADD_NOTE:'Add Note',
    DESCRIPTION:'Description',
    UPDATE_MARKER:'Update Marker',
    REMOVE_MARKER:'Remove Marker',
    CUSTOM_MARKER:'Custom Marker',
    MARKER_LINK:'Please click here to add a new marker.',
    MARKER_DETAIL_LINK:'Please click here to view marker details',
    ADD_MARKER:'Add Marker',
    ENTER_NAME:'Enter User Name',
    ENTER_MAIL:'Enter User Email Address',
    ENTER_PASSWD:'Enter User Password',
    UPDATE_SUCCESS:'Updated Successfully',
    FAILED_OP:'Operation failed!',
    NOTE_DETAILS:'Note Details',



  },
  tr:{
    USERNAME: 'Kullanıcı Adı',
    PASSWD: 'Şifre',
    B_LOGIN: 'Giriş Yap',
    REGISTER:'Kayıt Ol',
    REGISTER_LINK: "Bir hesabın yok mu? Kayıt olmak için buraya tıkla.",
    MY_NOTES: 'Notlarım',
    INFO: 'Bilgilendirme',
    DELETE_CONFIRM:'Bu notu silmek istediğinize emin misiniz?',
    NO:'Hayır',
    YES:'Evet',
    TITLE:'Başlık',
    CONTENT:'İçerik',
    LOCATION:'Konum',
    UPDATE_NOTE:'Notu Güncelle',
    REMOVE_NOTE:'Notu Sil',
    ENTER_TITLE:'Bir başlık girin.',
    TYPE_NOTE:'Notunuzu girin.',
    INSERT_CITY:'Konum girin.',
    ADD_NOTE:'Not Ekle',
    DESCRIPTION:'Açıklama',
    UPDATE_MARKER:'Yer İşaretini Güncelle',
    REMOVE_MARKER:'Yer İşaretini Kaldır',
    CUSTOM_MARKER:'Özel Yer İşareti',
    MARKER_LINK:'Yeni bir yer işareti eklemek için lütfen buraya tıklayın.',
    MARKER_DETAIL_LINK:'Yer işareti detaylarını görmek için lütfen buraya tıklayın.',
    ADD_MARKER:'Yer İşareti Ekle',
    ENTER_NAME:'Bir Kullanıcı Adı Girin',
    ENTER_MAIL:'E-mail Adresinizi Girin',
    ENTER_PASSWD:'Kullanıcı Şifresini Girin',
    UPDATE_SUCCESS:'Başarıyla Güncellendi',
    FAILED_OP:'İşlem Başarısız Oldu!',
    NOTE_DETAILS:'Not Detayları',
  }
};
export default new LocalizedStrings(translations);
