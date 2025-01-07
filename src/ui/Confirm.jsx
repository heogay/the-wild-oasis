import styled from "styled-components";

const ConfirmBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  height: 100px;
  width: 400px;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-lg);
  padding-right: 50px;
  margin: 0 auto;
`;

const yes = {
  margin: "15px 20px 0 20px",
  padding: "0 10px",
  fontWeight: "bold",
};

const no = {
  margin: "15px 20px 0 20px",
  padding: "0 10px",
};

export default function Confirm({ id, onConfirm }) {
  return (
    <ConfirmBox>
      <div>
        <p>Do you want to delete this cabin?</p>
      </div>
      <div>
        <button onClick={onConfirm} style={yes}>
          Yes
        </button>
        <button onClick={onConfirm} style={no}>
          Cancel
        </button>
      </div>
    </ConfirmBox>
  );
}
