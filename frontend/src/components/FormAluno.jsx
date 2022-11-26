import FormInput from "./FormInput";
import CleaveInput from "./CleaveInput";
import FormSelect from "./FormSelect";
import FormOptions from "./FormOptions";

const FormAluno = ({ handleChange, inputs, errors }) => {
    return (
        <>
            <FormInput type="text" field="nome" placeholder="Fulano de Tal" label="Nome" onChange={handleChange} value={inputs?.nome} error={errors?.nome} />
            <FormInput type="date" field="dataNascimento" placeholder="1900-01-01" label="Data de Nascimento" onChange={handleChange} value={inputs?.dataNascimento} error={errors?.dataNascimento} />
            <CleaveInput type="tel" field="cpf" placeholder="000.000.000-00" label="CPF" onChange={handleChange} options={{ blocks: [3, 3, 3, 2], delimiters: [".", ".", "-"], numericOnly: true }} value={inputs?.cpf} error={errors?.cpf} />
            <FormSelect
                field="sexo"
                label="Gênero"
                placeholder="Selecione um gênero..."
                onChange={handleChange}
                value={inputs?.sexo}
                error={errors?.sexo}
                options={[
                    { label: "Masculino", value: "M" },
                    { label: "Feminino", value: "F" },
                    { label: "Outro", value: "O" },
                ]}
            />
            <CleaveInput type="tel" field="telefone" placeholder="(99) 99999-9999" label="Telefone (com DDD)" onChange={handleChange} options={{ blocks: [0, 2, 0, 5, 4], delimiters: ["(", ")", " ", "-"], onlyNumbers: true }} value={inputs?.telefone} error={errors?.telefone} />
            <FormInput type="email" field="email" placeholder="fulano@email.com" label="E-mail" onChange={handleChange} value={inputs?.email} error={errors?.email} />
            <FormInput type="password" field="senha" placeholder="Senha" label="Senha" onChange={handleChange} value={inputs?.senha} error={errors?.senha} />
            <FormSelect
                field="ativo"
                label="Situação"
                placeholder="Selecione uma situação..."
                onChange={handleChange}
                value={inputs?.ativo}
                error={errors?.ativo}
                options={[
                    { label: "Ativo", value: "true" },
                    { label: "Inativo", value: "false" },
                ]}
            />
        </>
    );
};

export default FormAluno;
