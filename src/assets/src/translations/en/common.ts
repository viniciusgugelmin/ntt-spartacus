export const common = {
  common: {
    cancel: 'Cancelar',
    delete: 'Deletar',
    remove: 'Remover',
    edit: 'Editar',
    restore: 'Restaurar',
    back: 'Voltar',
    submit: 'Enviar',
    continue: 'Continuar',
    save: 'Salvar',
    done: 'Concluído',
    home: 'Início',
    noData: 'Sem dados.',
    confirm: 'Confirmar',
    more: 'mais',
    close: 'Fechar',
    loading: 'Carregando',
    menu: 'Menu',
    reset: 'Redefinir',
    search: 'Buscar',
    add: 'Adicionar',
    selectFile: 'Selecionar arquivo',
  },
  pageMetaResolver: {
    category: {
      title: '{{count}} resultado para {{query}}',
      title_plural: '{{count}} resultados para {{query}}',
    },
    checkout: {
      title: 'Finalizar compra',
    },
    search: {
      title: '{{count}} resultado para "{{query}}"',
      title_plural: '{{count}} resultados para "{{query}}"',
      findProductTitle: '{{count}} resultado para o cupom "{{coupon}}"',
      findProductTitle_plural: '{{count}} resultados para o cupom "{{coupon}}"',
      default_title: 'Todos os produtos',
    },
    product: {
      description: '{{description}}',
      heading: '{{heading}}',
      title: '{{title}}',
    },
  },
  spinner: {
    loading: 'Carregando...',
  },
  navigation: {
    shopAll: 'Compre tudo {{ navNode}} >',
  },
  searchBox: {
    placeholder: 'Buscar aqui...',
    ariaLabelInput: 'Buscar aqui...',
    ariaLabelSuggestions: 'sugestões de digitação',
    ariaLabelProducts: 'resultados de produtos',
    initialDescription:
      'Quando os resultados da autocompleta estiverem disponíveis, use as setas para cima e para baixo para revisar e entrar para selecionar. Usuários de dispositivos de toque, explorem tocando ou com gestos de deslizar.',
    suggestionsResult: '{{ count }} sugestão e ',
    suggestionsResult_plural: '{{ count }} sugestões e ',
    productsResult: '{{ count }} produto está disponível.',
    productsResult_plural: '{{ count }} produtos estão disponíveis.',
    resetLabel: 'Redefinir busca',
    help: {
      insufficientChars: 'Por favor, digite mais caracteres',
      noMatch: 'Não conseguimos encontrar nenhum resultado',
      exactMatch: '{{ term }}',
      empty: 'Pergunte-nos qualquer coisa',
    },
  },
  sorting: {
    date: 'Data',
    orderNumber: 'Número do Pedido',
    rma: 'Número da Devolução',
    replenishmentNumber: 'Número da Reposição',
    nextOrderDate: 'Data do Próximo Pedido',
  },
  httpHandlers: {
    badGateway: 'Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.',
    badRequestPleaseLoginAgain: '{{ errorMessage }}. Por favor, faça login novamente.',
    badRequestOldPasswordIncorrect: 'A senha antiga está incorreta.',
    badRequestGuestDuplicateEmail:
      '{{ errorMessage }} o e-mail já existe. Por favor, faça o checkout com um e-mail diferente para se registrar usando uma conta de convidado.',
    conflict: 'Já existe.',
    forbidden:
      'Você não está autorizado a realizar esta ação. Por favor, contate o administrador se você acha que isso é um erro.',
    gatewayTimeout: 'O servidor não respondeu, por favor tente novamente mais tarde.',
    internalServerError:
      'Ocorreu um Erro Interno do Servidor. Por favor, tente novamente mais tarde.',
    sessionExpired: 'Sua sessão expirou. Por favor, faça login novamente.',
    unknownError: 'Ocorreu um erro desconhecido',
    unauthorized: {
      common: 'Ocorreu um erro de autorização desconhecido',
      invalid_client: 'Credenciais do cliente inválidas',
    },
    validationErrors: {
      missing: {
        card_cardType:
          'O cartão de crédito selecionado não é suportado. Por favor, selecione outro.',
        card_accountNumber: 'O número do cartão de crédito inserido não é válido.',
        card_cvNumber: 'O código de segurança inserido não é válido.',
        card_expirationMonth:
          'A data de expiração do cartão de crédito inserida não é válida.',
        card_expirationYear:
          'A data de expiração do cartão de crédito inserida não é válida.',
        billTo_firstName: 'O primeiro nome inserido não é válido.',
        billTo_lastName: 'O sobrenome inserido não é válido.',
        billTo_street1: 'O endereço inserido não é válido.',
        billTo_street2: 'O endereço inserido não é válido.',
        billTo_city: 'A cidade inserida não é válida para este cartão de crédito.',
        billTo_state:
          'O estado/província inserido não é válido para este cartão de crédito.',
        billTo_country:
          'O país/região inserido não é válido para este cartão de crédito.',
        billTo_postalCode:
          'O código postal/CEP não é válido para este cartão de crédito.',
        country: {
          isocode: 'País/região faltando',
        },
      },
      invalid: {
        card_expirationMonth:
          'A data de expiração do cartão de crédito inserida não é válida.',
        firstName: 'O primeiro nome inserido não é válido.',
        lastName: 'O sobrenome inserido não é válido.',
        password: 'A senha inserida não é válida.',
        uid: 'O UID não é válido.',
        code: 'O código não é válido.',
        email: 'O e-mail não é válido.',
      },
    },
    cartNotFound: 'Carrinho não encontrado.',
    invalidCodeProvided: 'Código inválido fornecido.',
  },
  miniCart: {
    item: '{{count}} item atualmente no seu carrinho',
    item_plural: '{{count}} itens atualmente no seu carrinho',
    total: '{{total}}',
    count: '{{count}}',
  },
  skipLink: {
    skipTo: 'Pular para',
    labels: {
      header: 'Cabeçalho',
      main: 'Conteúdo Principal',
      footer: 'Rodapé',
      productFacets: 'Facetas de Produto',
      productList: 'Lista de Produtos',
    },
  },
  carousel: {
    previousSlide: 'Slide anterior',
    nextSlide: 'Próximo slide',
    slideNumber: 'Slide {{currentSlideNumber}}',
  },
  formErrors: {
    globalMessage: 'O formulário que você está tentando enviar contém erros.',
    required: 'Este campo é obrigatório',
    cxInvalidEmail: 'Este não é um formato de e-mail válido',
    cxInvalidPassword: 'Este não é um formato de senha válido',
    cxPasswordsMustMatch: 'Os campos de senha devem coincidir',
    cxEmailsMustMatch: 'Os campos de e-mail devem coincidir',
    cxStarRatingEmpty: 'O campo de classificação é obrigatório',
    cxNoSelectedItemToCancel: 'Selecione pelo menos um item',
    cxNegativeAmount: 'A quantidade deve ser igual ou maior que zero',
    cxContainsSpecialCharacters: 'O campo não pode conter caracteres especiais',
    date: {
      required: 'Este campo é obrigatório',
      min: 'A data não pode ser anterior a {{min}}',
      max: 'A data não pode ser posterior a {{max}}',
      pattern: 'Use o formato de data aaaa-mm-dd',
      invalid: 'Use uma data válida',
    },
    file: {
      required: 'Arquivo é obrigatório',
      empty: 'O arquivo não deve estar vazio',
      invalidExtension: 'A extensão do arquivo não é válida',
      tooLarge: 'O tamanho do arquivo não deve exceder {{ maxSize }} MB',
      tooManyEntries: 'O número de itens é maior que {{ maxEntries }}',
      notParsable: 'O arquivo não é analisável',
    },
  },
  errorHandlers: {
    scriptFailedToLoad: 'Falha ao carregar o script.',
    refreshThePage: 'Por favor, atualize a página.',
  },
};
