export interface Chamado {
    id?:             any;    /* Any porque posso trabalhar com Inteiro ou String e ? porque posso passar ou não o id */
    dataAbertura?:   string; /* Any porque posso trabalhar com String ou com Date */
    dataFechamento?: string;
    prioridade:      string;
    status:          string;
    titulo:          string;
    descricao:       string;
    tecnico:         any;
    cliente:         any;
    nomeCliente:     string;
    nomeTecnico:     string;
}