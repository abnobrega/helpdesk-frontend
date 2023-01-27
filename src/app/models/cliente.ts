export interface Cliente {
    id?:         any;   /* Any porque posso trabalhar com Inteiro ou String e ? porque posso passar ou não o id */
    nome:     string;
    cpf:      string;
    email:    string;
    senha:    string;
    perfis: string[]; 
    dataCriacao: any;   /* Any porque posso trabalhar com String ou com Date */
}