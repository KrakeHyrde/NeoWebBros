const chatbotCatalog = {
  "barro-lento": {
    name: "Barro Lento",
    icon: "◒",
    whatsapp: "5491100000101",
    greeting: "¡Hola! Soy el asistente de Barro Lento. Puedo contarte sobre las piezas, precios y esmaltes de la colección.",
    quickQuestions: ["¿Qué piezas tienen?", "¿Cuánto cuestan?", "¿Los tonos pueden variar?"],
    rules: [
      {
        keywords: ["pieza", "producto", "taza", "cuenco", "plato", "coleccion"],
        answer: "La colección Arena incluye la Taza Duna, el Cuenco Orilla y el Plato Sombra, todas piezas de gres esmaltado.",
      },
      {
        keywords: ["precio", "cuanto", "cuesta", "valor"],
        answer: "La Taza Duna cuesta $18.900, el Cuenco Orilla $22.500 y el Plato Sombra $26.900 ARS.",
      },
      {
        keywords: ["esmalte", "tono", "color", "varia", "variar", "hornada"],
        answer: "Como son piezas artesanales, el tono del esmalte puede variar levemente entre hornadas.",
      },
      {
        keywords: ["material", "gres", "ceramica"],
        answer: "Las piezas de la colección están realizadas en gres esmaltado con terminaciones artesanales.",
      },
    ],
  },
  "brote-sur": {
    name: "Brote Sur",
    icon: "✿",
    whatsapp: "5491100000102",
    greeting: "¡Hola! Soy el asistente de Brote Sur. Puedo ayudarte a elegir una planta según la luz y contarte cómo regarla.",
    quickQuestions: ["¿Qué planta necesita poca luz?", "¿Cómo las riego?", "¿Qué precios tienen?"],
    rules: [
      {
        keywords: ["poca luz", "oscuro", "sombra", "sansevieria"],
        answer: "La Sansevieria tolera poca luz y necesita poco riego. En la muestra cuesta $18.800 ARS.",
      },
      {
        keywords: ["luz", "ventana", "potus", "monstera"],
        answer: "Para luz indirecta suave podés elegir el Potus dorado. Si tenés mucha luz indirecta, la Monstera mini es una buena opción.",
      },
      {
        keywords: ["riego", "regar", "agua", "humedo", "humedad"],
        answer: "Antes de regar, tocá el sustrato. Si todavía está húmedo, esperá y volvé a revisarlo otro día.",
      },
      {
        keywords: ["precio", "cuanto", "cuesta", "valor"],
        answer: "El Potus dorado cuesta $11.900, la Sansevieria $18.800 y la Monstera mini $23.500 ARS.",
      },
    ],
  },
  "fuego-manso": {
    name: "Fuego Manso",
    icon: "◆",
    whatsapp: "5491100000103",
    greeting: "¡Hola! Soy el asistente de Fuego Manso. Puedo recomendarte un café por perfil de sabor o tipo de molienda.",
    quickQuestions: ["¿Qué cafés tienen?", "¿Qué molienda elijo?", "¿Cuánto cuestan?"],
    rules: [
      {
        keywords: ["cafe", "variedad", "sabor", "perfil", "sierra", "altura", "noche"],
        answer: "Sierra Dulce tiene notas de chocolate, almendra y naranja; Altura Clara, de durazno, miel y jazmín; Noche Larga, de cacao, ciruela y caramelo.",
      },
      {
        keywords: ["molienda", "molido", "filtro", "espresso", "grano", "preparar"],
        answer: "Para filtro elegí molienda media, para espresso molienda fina y, si tenés molinillo en casa, pedilo en grano.",
      },
      {
        keywords: ["precio", "cuanto", "cuesta", "valor"],
        answer: "Los paquetes de 250 g cuestan: Sierra Dulce $14.500, Altura Clara $16.200 y Noche Larga $15.300 ARS.",
      },
      {
        keywords: ["peso", "gramos", "presentacion", "paquete"],
        answer: "Los cafés de la carta se presentan en paquetes de 250 g.",
      },
    ],
  },
  "pixel-arcade": {
    name: "Pixel Arcade",
    icon: "◆",
    whatsapp: "5491100000104",
    greeting: "¡Hola, Player 01! Puedo contarte sobre los controles, juegos, precios y compatibilidad del inventario.",
    quickQuestions: ["¿Qué incluye el combo?", "¿Son compatibles con PC?", "¿Cuánto cuestan?"],
    rules: [
      {
        keywords: ["combo", "co-op", "co op", "dos controles"],
        answer: "El Combo Co-op incluye dos controles USB y cuesta $54.900 ARS.",
      },
      {
        keywords: ["compatible", "compatibilidad", "pc", "usb", "puerto", "conexion"],
        answer: "El Control Turbo 8 usa conexión USB para PC. Antes de comprar, compará el puerto de tu equipo con la conexión indicada.",
      },
      {
        keywords: ["juego", "nebula", "cartucho"],
        answer: "Nebula Run es un juego ficticio en cartucho de 16 bits y cuesta $42.000 ARS.",
      },
      {
        keywords: ["precio", "cuanto", "cuesta", "valor", "control"],
        answer: "El Control Turbo 8 cuesta $29.900, Nebula Run $42.000 y el Combo Co-op $54.900 ARS.",
      },
    ],
  },
  "ritmo-calle": {
    name: "Ritmo Calle",
    icon: "RC",
    whatsapp: "5491100000105",
    greeting: "¡Hola! Soy el asistente de Ritmo Calle. Puedo ayudarte con prendas, talles, materiales y precios del Drop Asfalto.",
    quickQuestions: ["¿Qué prendas tienen?", "¿Cómo elijo mi talle?", "¿Cuánto cuestan?"],
    rules: [
      {
        keywords: ["prenda", "producto", "remera", "gorra", "buzo", "drop"],
        answer: "El Drop Asfalto incluye la Remera Esquina, la Gorra Vereda y el Buzo Cruce.",
      },
      {
        keywords: ["talle", "tamano", "medida", "xl", "small", "large"],
        answer: "La remera y el buzo vienen de S a XL. Para elegir, medí de axila a axila una prenda que ya te quede cómoda y usá esa medida como referencia.",
      },
      {
        keywords: ["material", "algodon", "gabardina", "frisa"],
        answer: "La Remera Esquina es de algodón, la Gorra Vereda de gabardina y el Buzo Cruce de frisa.",
      },
      {
        keywords: ["precio", "cuanto", "cuesta", "valor"],
        answer: "La Remera Esquina cuesta $24.900, la Gorra Vereda $18.900 y el Buzo Cruce $46.900 ARS.",
      },
    ],
  },
};

const businessKey = document.body.dataset.chatbotBusiness;
const chatbotConfig = chatbotCatalog[businessKey];

if (chatbotConfig) {
  const widget = document.createElement("div");
  widget.className = "demo-chat-widget";
  widget.innerHTML = `
    <button class="demo-chat-launcher" type="button" aria-expanded="false" aria-controls="demo-chat-panel">
      <span class="demo-chat-launcher-icon" aria-hidden="true">💬</span>
      Consultar
    </button>
    <section class="demo-chat-panel" id="demo-chat-panel" role="dialog" aria-label="Asistente de ${chatbotConfig.name}" hidden>
      <header class="demo-chat-header">
        <div class="demo-chat-identity">
          <span class="demo-chat-avatar" aria-hidden="true">${chatbotConfig.icon}</span>
          <span>
            <strong>${chatbotConfig.name}</strong>
            <small>Asistente automático</small>
          </span>
        </div>
        <button class="demo-chat-close" type="button" aria-label="Cerrar chat">×</button>
      </header>
      <div class="demo-chat-messages" aria-live="polite" aria-relevant="additions"></div>
      <div class="demo-chat-quick-list" aria-label="Preguntas sugeridas"></div>
      <form class="demo-chat-form">
        <label class="sr-only" for="demo-chat-input">Escribí tu consulta</label>
        <input class="demo-chat-input" id="demo-chat-input" type="text" maxlength="160" placeholder="Escribí tu consulta…" autocomplete="off" />
        <button class="demo-chat-send" type="submit" aria-label="Enviar consulta">➜</button>
      </form>
    </section>
  `;

  document.body.append(widget);

  const launcher = widget.querySelector(".demo-chat-launcher");
  const panel = widget.querySelector(".demo-chat-panel");
  const closeButton = widget.querySelector(".demo-chat-close");
  const messages = widget.querySelector(".demo-chat-messages");
  const quickList = widget.querySelector(".demo-chat-quick-list");
  const form = widget.querySelector(".demo-chat-form");
  const input = widget.querySelector(".demo-chat-input");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let closeTimer;

  const normalizeText = (text) => text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

  const appendMessage = (text, sender = "bot") => {
    const message = document.createElement("p");
    message.className = `demo-chat-message${sender === "user" ? " demo-chat-message-user" : ""}`;
    message.textContent = text;
    messages.append(message);
    messages.scrollTop = messages.scrollHeight;
  };

  const appendWhatsAppLink = (question) => {
    const whatsappText = `Hola, vengo de la demo de ${chatbotConfig.name}. Quería consultar: ${question}`;
    const link = document.createElement("a");
    link.className = "demo-chat-whatsapp";
    link.href = `https://wa.me/${chatbotConfig.whatsapp}?text=${encodeURIComponent(whatsappText)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Continuar por WhatsApp ↗";
    messages.append(link);
    messages.scrollTop = messages.scrollHeight;
  };

  const appendTypingIndicator = () => {
    const indicator = document.createElement("div");
    indicator.className = "demo-chat-typing";
    indicator.setAttribute("role", "status");
    indicator.setAttribute("aria-label", `${chatbotConfig.name} está escribiendo`);

    for (let index = 0; index < 3; index += 1) {
      const dot = document.createElement("span");
      dot.setAttribute("aria-hidden", "true");
      indicator.append(dot);
    }

    messages.append(indicator);
    messages.scrollTop = messages.scrollHeight;
    return indicator;
  };

  const findAnswer = (question) => {
    const normalizedQuestion = normalizeText(question);

    if (/\b(hola|buenas|buen dia|buenas tardes|buenas noches)\b/.test(normalizedQuestion)) {
      return { answer: chatbotConfig.greeting, redirect: false };
    }

    if (/\b(gracias|genial|perfecto)\b/.test(normalizedQuestion)) {
      return { answer: "¡De nada! Si querés, podés hacerme otra consulta.", redirect: false };
    }

    if (/\b(whatsapp|contacto|persona|humano|asesor|vendedor)\b/.test(normalizedQuestion)) {
      return {
        answer: "Te derivo al WhatsApp del negocio para que continúes la consulta con una persona.",
        redirect: true,
      };
    }

    const matchingRule = chatbotConfig.rules.find((rule) => rule.keywords.some((keyword) => normalizedQuestion.includes(keyword)));

    if (matchingRule) {
      return { answer: matchingRule.answer, redirect: false };
    }

    return {
      answer: "Todavía no tengo esa respuesta. Te derivo al WhatsApp del negocio para que puedan ayudarte.",
      redirect: true,
    };
  };

  const askQuestion = (question) => {
    const cleanQuestion = question.trim();

    if (!cleanQuestion) {
      return;
    }

    appendMessage(cleanQuestion, "user");
    input.value = "";
    const response = findAnswer(cleanQuestion);
    const typingIndicator = appendTypingIndicator();
    const responseDelay = reducedMotion ? 450 : Math.min(1150, 620 + response.answer.length * 3);

    window.setTimeout(() => {
      typingIndicator.remove();
      appendMessage(response.answer);

      if (response.redirect) {
        appendWhatsAppLink(cleanQuestion);
      }
    }, 280);
  };

  const openChat = () => {
    window.clearTimeout(closeTimer);
    panel.hidden = false;
    launcher.setAttribute("aria-expanded", "true");
    window.requestAnimationFrame(() => {
      panel.classList.add("is-open");
      input.focus();
    });
  };

  const closeChat = () => {
    panel.classList.remove("is-open");
    launcher.setAttribute("aria-expanded", "false");
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => {
      panel.hidden = true;
    }, reducedMotion ? 0 : 220);
    launcher.focus();
  };

  chatbotConfig.quickQuestions.forEach((question) => {
    const button = document.createElement("button");
    button.className = "demo-chat-quick";
    button.type = "button";
    button.textContent = question;
    button.addEventListener("click", () => askQuestion(question));
    quickList.append(button);
  });

  appendMessage(chatbotConfig.greeting);

  launcher.addEventListener("click", () => {
    if (panel.classList.contains("is-open")) {
      closeChat();
    } else {
      openChat();
    }
  });

  closeButton.addEventListener("click", closeChat);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    askQuestion(input.value);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      closeChat();
    }
  });
}
