import styled from 'styled-components';

const Radio = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px; 
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`;

const RadioBtn = styled.span`
    display: inline-block;
    display: flex;
    width: 151px;
    height: 44px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 14px;
    border: 1px solid #48BFA2;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
`;

const InputRadioContainer = styled.div`
    display: flex;
    height: 44px;
    align-items: center;
    gap: 7px;
    align-self: stretch;
`;

export default function InputRadio({options, name, selectedValue, onChange }) {
    return (
        <InputRadioContainer>
            {options.map((option, idx) => (
                <label key={idx}>
                    <Radio
                        type='radio'
                        name={name}
                        value={option.value}
                        onChange={(e) => onChange(Number(e.target.value))}
                        checked={idx === selectedValue}
                    />
                    <RadioBtn
                        style={{
                            backgroundColor: idx === selectedValue ? '#48BFA2' : '#fff',
                            color: idx === selectedValue ? '#fff' : '#48BFA2'
                        }}
                    >
                        {option.label}
                    </RadioBtn>
                </label>
            ))}
        </InputRadioContainer>
    );
}
