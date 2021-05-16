import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://bloomcollective.us1.list-manage.com/subscribe/post?u=4ec962450e400591251005f55&amp;id=4c0ed15cee";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />;

// use the render prop and your custom form
export default function CustomForm() {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <div>
          <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
          {status === "sending" && (
            <div style={{ color: "lightblue" }}>sending...</div>
          )}
          {status === "error" && (
            <div
              style={{ color: "red" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div style={{ color: "green" }}>Subscribed !</div>
          )}
        </div>
      )}
    />
  );
}
