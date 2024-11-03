export class Locators {

    // Homepage locators
    static REGISTER_LINK = 'a[href="/register?returnUrl=%2F"]';
    static LOGIN_LINK = 'a[href="/login?returnUrl=%2F"]';
    static LOGOUT_LINK = '//a[@class="ico-logout"]';
    static ADD_PRODUCT_TO_CART_BUTTON = '//div[@data-productid="18"]//div[@class="buttons"]//button[@class="button-2 product-box-add-to-cart-button"]';
    static GO_TO_CART_BUTTON = 'span[class="cart-label"]';
    static BOOKS_LINK = '//ul[@class="top-menu notmobile"]/li[5]';


    // Registration and Login page locators
    static GENDER_MALE_RADIOBUTTON = '//div[@id="gender"]//input[@id="gender-male"]';
    static FIRST_NAME_INPUT_FIELD = '//input[@id="FirstName"]';
    static LAST_NAME_INPUT_FIELD = '//input[@id="LastName"]';
    static EMAIL_INPUT_FIELD = '//input[@id="Email"]';
    static DATE_OF_BIRTH_DAY_DROPDOWN = '//select[@name="DateOfBirthDay"]';
    static DATE_OF_BIRTH_MONTH_DROPDOWN = '//select[@name="DateOfBirthMonth"]';
    static DATE_OF_BIRTH_YEAR_DROPDOWN = '//select[@name="DateOfBirthYear"]';
    static PASSWORD_INPUT_FIELD = '//input[@id="Password"]';
    static CONFIRM_PASSWORD_INPUT_FIELD = '//input[@id="ConfirmPassword"]';
    static REGISTER_BUTTON = '//button[@id="register-button"]';
    static REGISTRATION_COMPLETED_TITLE = '//div[text()="Your registration completed"]';
    static CONTINUE_TO_HOMEPAGE_BUTTON = '//a[@class="button-1 register-continue-button"]';
    static LOGIN_BUTTON = '//button[@class="button-1 login-button"]';
    static INVALID_EMAIL_ERROR_MESSAGE = '//span[@id="Email-error"]';

    // Cart and Checkout page locators
    static ACCEPT_TERMS_OF_SERVICE_CHECKBOX = '//input[@id="termsofservice"]';
    static CHECKOUT_BUTTON = '//button[@id="checkout"]';
    static CHECKOUT_STEP_BILLING_ADDRESS = '//h2[text()="Billing address"]';
    static CHECKOUT_STEP_SHIPPING_ADDRESS = '//h2[text()="Shipping address"]';
    static CHECKOUT_STEP_SHIPPING_METHOD = '//h2[text()="Shipping method"]';
    static CHECKOUT_STEP_PAYMENT_METHOD = '//h2[text()="Payment method"]';
    static CHECKOUT_STEP_PAYMENT_INFORMATION = '//h2[text()="Payment information"]'; 
    static CHECKOUT_STEP_CONFIRM_ORDER = '//h2[text()="Confirm order"]';
    static BILLING_ADDRESS_COUNTRY_DROPDOWN = '//select[@id="BillingNewAddress_CountryId"]';
    static BILLING_ADDRESS_CITY_INPUT_FIELD = '//input[@id="BillingNewAddress_City"]';
    static BILLING_ADDRESS_ADDRESS1_INPUT_FIELD = '//input[@id="BillingNewAddress_Address1"]';
    static BILLING_ADDRESS_ZIP_CODE_INPUT_FIELD = '//input[@id="BillingNewAddress_ZipPostalCode"]';
    static BILLING_ADDRESS_PHONE_NUMBER_INPUT_FIELD = '//input[@id="BillingNewAddress_PhoneNumber"]';
    static CONTINUE_TO_SECOND_STEP_BUTTON = '//button[@class="button-1 new-address-next-step-button" and @name="save"]';
    static CONTINUE_TO_THIRD_STEP_BUTTON = '//button[@class="button-1 shipping-method-next-step-button"]';
    static CONTINUE_TO_FOURTH_STEP_BUTTON = '//button[@class="button-1 payment-method-next-step-button"]';
    static CONTINUE_TO_FIFTH_STEP_BUTTON = '//button[@class="button-1 payment-info-next-step-button"]';
    static COMPLETE_ORDER_BUTTON = '//button[@class="button-1 confirm-order-next-step-button"]';
    static PAYMENT_SUCCESSFUL_PAGE = '//div[@class="page checkout-page order-completed-page"]';
    static PRODUCT_1_DISPLAYED_IN_CART = '//a[@class="product-name" and @href="/fahrenheit-451-by-ray-bradbury" and text()="Fahrenheit 451 by Ray Bradbury"]';
    static PRODUCT_2_DISPLAYED_IN_CART = '//a[@class="product-name" and @href="/first-prize-pies" and text()="First Prize Pies"]';
    static PRODUCT_3_DISPLAYED_IN_CART = '//a[@class="product-name" and @href="/pride-and-prejudice" and text()="Pride and Prejudice"]';
    static PRODUCT_2_QUANTITY = '//tr[.//a[@class="product-name" and @href="/first-prize-pies" and text()="First Prize Pies"]]//input[@class="qty-input"]';
    static PRODUCT_2_QUANTITY_UP_BUTTON = '//tr[.//a[@class="product-name" and text()="First Prize Pies"]]//div[@class="quantity up"]';
    static PRODUCT_2_PRICE = '//tr[.//a[@class="product-name" and text()="First Prize Pies"]]//span[@class="product-subtotal"]';
    static PRODUCT_3_REMOVE = '//tr[.//a[@class="product-name" and text()="Pride and Prejudice"]]//button[@class="remove-btn"]';


    // Books page locators
    static BOOKS_PAGE = '//div[@class="page-title"]/h1[text()="Books"]';
    static ADD_TO_CART_PRODUCT_1 = '//button[contains(@onclick, "/addproducttocart/catalog/37/1/1") and text()="Add to cart"]';
    static ADD_TO_CART_PRODUCT_2 = '//button[contains(@onclick, "/addproducttocart/catalog/38/1/1") and text()="Add to cart"]';
    static ADD_TO_CART_PRODUCT_3 = '//button[contains(@onclick, "/addproducttocart/catalog/39/1/1") and text()="Add to cart"]';
    static CLOSE_ADD_TO_CART_POPUP = '//span[@class="close" and @title="Close"]';


}