export const myAccount = {
  orderDetails: {
    orderId: 'Pedido #',
    orderNumber: 'Número do Pedido',
    replenishmentId: 'Reabastecimento #',
    purchaseOrderId: 'Ordem de Compra #',
    purchaseOrderNumber: 'Número da Ordem de Compra',
    emptyPurchaseOrderId: 'Nenhum',
    none: 'Nenhum {{value}}',
    placed: 'Realizado',
    placedBy: 'Realizado por',
    unit: 'Unidade',
    costCenter: 'Centro de Custo',
    costCenterAndUnit: 'Centro de Custo / Unidade',
    costCenterAndUnitValue: '{{costCenterName}} / {{unitName}}',
    methodOfPayment: 'Método de Pagamento',
    payByAccount: 'Pagar por Conta',
    paidByCreditCard: '(pago com cartão de crédito)',
    status: 'Status',
    active: 'Ativo',
    shippedOn: 'Enviado em',
    shippingMethod: 'Método de Envio',
    placedOn: 'Realizado em',
    startOn: 'Início em',
    nextOrderDate: 'Próxima Data de Pedido',
    frequency: 'Frequência',
    cancelled: ' Cancelado',
    deliveryStatus_IN_TRANSIT: 'Em Trânsito',
    deliveryStatus_READY_FOR_PICKUP: 'Pronto para Retirada',
    deliveryStatus_READY_FOR_SHIPPING: 'Pronto para Envio',
    deliveryStatus_WAITING: 'Aguardando',
    deliveryStatus_DELIVERING: 'Entregando',
    deliveryStatus_PICKPACK: 'Preparando para Envio',
    deliveryStatus_PICKUP_COMPLETE: 'Retirada Completa',
    deliveryStatus_DELIVERY_COMPLETED: 'Entrega Completa',
    deliveryStatus_PAYMENT_NOT_CAPTURED: 'Problema de Pagamento',
    deliveryStatus_READY: 'Em Processo',
    deliveryStatus_DELIVERY_REJECTED: 'Entrega Rejeitada',
    deliveryStatus_SHIPPED: 'Enviado',
    deliveryStatus_TAX_NOT_COMMITTED: 'Problema Fiscal',
    deliveryStatus_CANCELLED: 'Cancelado',
    statusDisplay_cancelled: 'Cancelado',
    statusDisplay_cancelling: 'Cancelamento Pendente',
    statusDisplay_completed: 'Completo',
    statusDisplay_created: 'Criado',
    statusDisplay_error: 'Pendente',
    statusDisplay_Error: 'Pendente',
    statusDisplay_processing: 'Pendente',
    statusDisplay_open: 'Aberto',
    statusDisplay_pending: {
      approval: 'Aguardando Aprovação',
      merchant: {
        approval: 'Aguardando Aprovação do Comerciante',
      },
    },
    statusDisplay_approved: 'Aprovado',
    statusDisplay_rejected: 'Rejeitado',
    statusDisplay_merchant: {
      approved: 'Comerciante Aprovado',
      rejected: 'Comerciante Rejeitado',
    },
    statusDisplay_assigned: {
      admin: 'Atribuído ao Administrador',
    },
    consignmentTracking: {
      action: 'Rastrear pacote',
      dialog: {
        header: 'Informações de Rastreamento',
        shipped: 'Enviado',
        estimate: 'Entrega Estimada',
        carrier: 'Serviço de Entrega',
        trackingId: 'Número de Rastreamento',
        noTracking:
          'O pacote ainda não foi despachado do depósito. As informações de rastreamento estarão disponíveis após o envio do pacote.',
        loadingHeader: 'Rastreamento de Consignação',
      },
    },
    cancellationAndReturn: {
      returnAction: 'Solicitar Devolução',
      cancelAction: 'Cancelar Itens',
      item: 'Item',
      itemPrice: 'Preço do Item',
      quantity: 'Quantidade Máxima',
      returnQty: 'Quantidade a Devolver',
      cancelQty: 'Quantidade a Cancelar',
      setAll: 'Definir todas as quantidades para o máximo',
      totalPrice: 'Total',
      submit: 'Enviar Solicitação',
      returnSuccess: 'Sua solicitação de devolução ({{rma}}) foi enviada',
      cancelSuccess:
        'Sua solicitação de cancelamento foi enviada (pedido original {{orderCode}} será atualizado)',
    },
    cancelReplenishment: {
      title: 'Cancelar Reabastecimento',
      description: 'Cancelar qualquer pedido de reabastecimento futuro?',
      accept: 'Sim',
      reject: 'Não',
      cancelSuccess:
        'O pedido de reabastecimento #{{replenishmentOrderCode}} foi cancelado com sucesso',
    },
  },
  orderHistory: {
    orderHistory: 'Histórico de Pedidos',
    orderId: 'Pedido #',
    emptyPurchaseOrderId: 'Nenhum',
    date: 'Data',
    status: 'Status',
    total: 'Total',
    noOrders: 'Não temos registros de pedidos para esta conta.',
    noReplenishmentOrders:
      'Não temos registros de pedidos de reabastecimento para esta conta.',
    startShopping: 'Começar a Comprar',
    sortBy: 'Ordenar por',
    replenishmentOrderHistory: 'Histórico de Pedidos de Reabastecimento',
    replenishmentOrderId: 'Reabastecimento #',
    purchaseOrderNumber: 'PO #',
    startOn: 'Início em',
    frequency: 'Frequência',
    nextOrderDate: 'Próxima Data do Pedido',
    cancel: 'Cancelar',
    cancelled: 'Cancelado',
    replenishmentHistory: 'Histórico de Reabastecimento',
    notFound: 'Nenhum Pedido Encontrado',
  },
  closeAccount: {
    confirmAccountClosure: 'Confirmar Encerramento da Conta',
    confirmAccountClosureMessage:
      'Tem certeza de que deseja encerrar sua conta?',
    closeMyAccount: 'ENCERRAR MINHA CONTA',
    accountClosedSuccessfully: 'Conta encerrada com sucesso',
    accountClosedFailure: 'Falha ao encerrar a conta',
  },
  updatePasswordForm: {
    oldPassword: {
      label: 'Senha Antiga',
      placeholder: 'Senha Antiga',
    },
    oldPasswordIsRequired: 'A senha antiga é obrigatória.',
    newPassword: {
      label: 'Nova Senha',
      placeholder: 'Nova Senha',
    },
    passwordMinRequirements:
      'A senha deve ter no mínimo seis caracteres, com uma letra maiúscula, um número, um símbolo',
    confirmPassword: {
      label: 'Confirmar Nova Senha',
      placeholder: 'Confirmar Senha',
    },
    bothPasswordMustMatch: 'Ambas as senhas devem coincidir',
    passwordUpdateSuccess: 'Senha atualizada com sucesso',
  },
  updateProfileForm: {
    title: '',
    none: '',
    firstName: {
      label: 'Nome',
      placeholder: 'Nome',
    },
    firstNameIsRequired: 'O nome é obrigatório.',
    lastName: {
      label: 'Sobrenome',
      placeholder: 'Sobrenome',
    },
    lastNameIsRequired: 'O sobrenome é obrigatório.',
    profileUpdateSuccess: 'Detalhes pessoais atualizados com sucesso',
    customerId: 'Cliente #',
  },
  consentManagementForm: {
    clearAll: 'Limpar tudo',
    selectAll: 'Selecionar todos',
    message: {
      success: {
        given: 'Consentimento dado com sucesso.',
        withdrawn: 'Consentimento retirado com sucesso.',
      },
    },
  },
  myCoupons: {
    noCouponsMessage: 'Você não tem cupons disponíveis.',
    effectiveTitle: 'Efetivo:',
    Effective: 'EFETIVO',
    PreSession: 'EFETIVO EM BREVE',
    ExpireSoon: 'EXPIRANDO EM BREVE',
    readMore: 'Leia mais',
    notification: 'Notificação',
    findProducts: 'Encontrar Produtos',
    status: 'Status:',
    dialogTitle: 'Cupom',
    claimCustomerCoupon: 'Você resgatou este cupom com sucesso.',
    myCoupons: 'Meus Cupons',
    startDateAsc: 'Data de Início (crescente)',
    startDateDesc: 'Data de Início (decrescente)',
    endDateAsc: 'Data de Término (crescente)',
    endDateDesc: 'Data de Término (decrescente)',
    sortBy: 'Ordenar por',
    notesPreffix:
      'Você pode definir seus canais preferidos para receber notificações de cupons na página de ',
    notesLink: 'Canais de Notificação',
    notesSuffix: '.',
  },
  notificationPreference: {
    message: 'Selecione seus canais de notificação preferidos',
    note: 'Nota: ',
    noteMessage:
      'Se você desativar todos os canais, não receberá mais nenhuma notificação.',
    EMAIL: 'E-mail:',
    SMS: 'SMS:',
    SITE_MESSAGE: 'Mensagem do Site',
  },
  myInterests: {
    header: 'Meus Interesses',
    item: 'ITEM',
    price: 'PREÇO',
    notifications: 'NOTIFICAÇÕES',
    noInterests: 'Você ainda não possui interesses registrados.',
    inStock: 'Em Estoque',
    lowStock: 'Baixo Estoque',
    outOfStock: 'Sem Estoque',
    BACK_IN_STOCK: 'De Volta ao Estoque',
    sortBy: 'Ordenar por',
    expirationDate: ' - Até {{ expirationDate }}',
    productId: 'ID {{ code }}',
    remove: 'REMOVER',
    sorting: {
      byNameAsc: 'Nome (crescente)',
      byNameDesc: 'Nome (decrescente)',
    },
  },
  AccountOrderHistoryTabContainer: {
    tabs: {
      AccountOrderHistoryComponent: 'TODOS OS PEDIDOS ({{param}})',
      OrderReturnRequestListComponent: 'DEVOLUÇÕES ({{param}})',
    },
  },
  returnRequestList: {
    returnRequestId: 'Devolução #',
    orderId: 'Pedido #',
    date: 'Data Criada',
    status: 'Status',
    sortBy: 'Ordenar por',
    statusDisplay_APPROVAL_PENDING: 'Aprovação Pendente',
    statusDisplay_CANCELED: 'Cancelado',
    statusDisplay_CANCELLING: 'Cancelando',
    statusDisplay_WAIT: 'Aguardar',
    statusDisplay_RECEIVED: 'Recebido',
    statusDisplay_RECEIVING: 'Recebendo',
    statusDisplay_APPROVING: 'Aprovando',
    statusDisplay_REVERSING_PAYMENT: 'Revertendo Pagamento',
    statusDisplay_PAYMENT_REVERSED: 'Pagamento Revertido',
    statusDisplay_PAYMENT_REVERSAL_FAILED: 'Falha na Reversão de Pagamento',
    statusDisplay_REVERSING_TAX: 'Revertendo Imposto',
    statusDisplay_TAX_REVERSED: 'Imposto Revertido',
    statusDisplay_TAX_REVERSAL_FAILED: 'Falha na Reversão de Imposto',
    statusDisplay_COMPLETED: 'Completo',
  },
  returnRequest: {
    returnRequestId: 'Pedido de Devolução #',
    orderCode: 'Para Pedido #',
    status: 'Status de Devolução',
    cancel: 'Cancelar Pedido de Devolução',
    item: 'Descrição',
    itemPrice: 'Preço do Item',
    returnQty: 'Quantidade para Devolução',
    total: 'Total',
    summary: 'Totais de Devolução',
    subtotal: 'Subtotal',
    deliveryCode: 'Custo de Entrega',
    estimatedRefund: 'Reembolso Estimado',
    note: 'Os totais são estimados e podem não incluir impostos aplicáveis ou outras taxas.',
    cancelSuccess: 'Sua solicitação de devolução ({{rma}}) foi cancelada',
  },
  wishlist: {
    empty: 'Nenhum produto na sua lista de desejos ainda',
  },
};
