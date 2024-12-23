import React from 'react';

// Определяем стили как объект
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5em',
    marginBottom: '20px',
  },
  description: {
    marginBottom: '20px',
  },
  importantNote: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  instructions: {
    marginBottom: '20px',
  },
  ownerAbilities: {
    marginBottom: '10px',
  },
  abilitiesList: {
    listStyle: 'disc',
    padding: '20px',
  },
  abilitiesListItem: {
    marginBottom: '10px',
  },
};

const DonationContractPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1>Проект Donation Contract</h1>
      <p style={styles.description}>
        Данный проект реализует функционал, который позволяет принимать пожертвования в нативной валюте ETH от других пользователей.
      </p>
      <div style={styles.importantNote}>
        <h2>Важно!</h2>
        <p>
          Перед вызовом каждой функции убедитесь, что на вашем адресе достаточно средств для оплаты газа.
        </p>
      </div>
      <p style={styles.instructions}>
        Для отправки пожертвования пользователю необходимо вызвать функцию <code>donate</code>, прежде указав количество токенов ETH в единицах wei (1 ETH = 10<sup>18</sup> wei).
      </p>
      <h2 style={styles.ownerAbilities}>Владелец контракта имеет следующие возможности:</h2>
      <ul style={styles.abilitiesList}>
        <li style={styles.abilitiesListItem}>
          <strong>Вывести средства с контракта на кошелек</strong>, функция <code>withdraw</code>
        </li>
        <li style={styles.abilitiesListItem}>
          <strong>Получить информацию о конкретном донатере</strong>, функция <code>donors</code>
        </li>
        <li style={styles.abilitiesListItem}>
          <strong>Получить адреса всех донатеров</strong>, функция <code>donorsAddresses</code>
        </li>
        <li style={styles.abilitiesListItem}>
          <strong>Получить общую сумму пожертвований конкретного донатера</strong>, функция <code>getPaymentsSum</code>
        </li>
      </ul>
    </div>
  );
};

export default DonationContractPage;
