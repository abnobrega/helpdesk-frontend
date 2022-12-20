export interface Tecnico {
    id?:         any;   /* Any porque posso trabalhar com Inteiro ou String ! ? Posso passar ou não o id */
    nome:     string;
    cpf:      string;
    email:    string;
    senha:    string;
    perfis: string[]; 
    dataCriacao: any;   /* Any porque posso trabalhar com String ou com Date */
}