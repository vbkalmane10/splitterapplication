import "./widget.css";

export interface WidgetProps {
  type: "information" | "warning" | "error";
}

export function Widget({ type }: WidgetProps) {
  const getTitle = () => {
    switch (type) {
      case "information":
        return "Information";
      case "warning":
        return "Warning ";
      case "error":
        return "Error";
      default:
        return "";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "information":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="blue"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
          </svg>
        );
      case "warning":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="orange"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
        );
      case "error":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="red"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z" />
          </svg>
        );
      default:
        return "";
    }
  };

  const getDescriptionClass = () => {
    switch (type) {
      case "information":
        return "info";
      case "warning":
        return "warn";
      case "error":
        return "error";
      default:
        return "";
    }
  };

  return (
    <div className="container">
      <div className="cut-out">
        <div className="circle">
          <h1>{getIcon()}</h1>
        </div>
      </div>
      <div className={`description ${getDescriptionClass()}`}>
        <h1>{getTitle()}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          iure hic, quibusdam placeat consequuntur dignissimos a sed vitae
          debitis nisi. Magnam amet fugiat, nam cum ad nihil magni quaerat.
          Iusto Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Accusamus dicta quos, sit illum incidunt explicabo qui voluptatibus
          voluptates nobis vero in eius doloribus, minus non, eligendi omnis
          quae est nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsam, odio. Doloremque beatae iusto assumenda corporis!
          Assumenda voluptatibus quo velit saepe enim deserunt aperiam minus
          ipsam necessitatibus quos, accusantium dolor beatae? Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Molestiae est beatae
          aspernatur eos pariatur, atque ea fugiat voluptatum fuga laudantium.
          Consequatur alias sequi voluptas. Fuga perspiciatis expedita dolore
          incidunt magni.
        </p>
      </div>
    </div>
  );
}
