export interface Chamado {
    id?:                 any;    /* Any porque posso trabalhar com Inteiro ou String e ? porque posso passar ou não o id */
    dataAbertura?:       string; /* Any porque posso trabalhar com String ou com Date */
    dataFechamento?:     string; /* Any porque posso trabalhar com String ou com Date */
    idPrioridadeChamado: string;
    idStatusChamado:     string;
    titulo:              string;
    observacoes:         string;  
    idCliente:           any;
    nomeCliente:         string;
    idTecnico:           any;
    nomeTecnico:         string;    
}