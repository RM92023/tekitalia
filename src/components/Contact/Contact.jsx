import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contacto</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" className="form-control"></textarea>
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
