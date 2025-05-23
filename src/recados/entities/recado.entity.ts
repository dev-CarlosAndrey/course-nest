import { Pessoa } from "src/pessoas/entities/pessoa.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Recado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255})
    texto: string;

    @Column({ default: false })
    lido: boolean;

    @Column()
    data: Date;

    @CreateDateColumn()
    createdAt?: Date;
    
    @CreateDateColumn()
    updatedAt?: Date; 

    //Muitos recados podem ser enviados para uma unica pessoa (Emissor)
    @ManyToOne(() => Pessoa)
    //Especifica a coluna "de" que aramazena o ID da pessoa que enviou o recado
    @JoinColumn({ name: 'de'})
    de: Pessoa;

    //Muitos recados podem ser enviados para uma unica pessoa (Destinátario)
    @ManyToOne(() => Pessoa)
    //Especifica a coluna "para" que aramazena o ID da pessoa que recebe o recado
    @JoinColumn({ name: 'para'})
    para: Pessoa;
}