// Configurações do gráfico de Vendas Mensais
const relatoryCtx = document.getElementById('relatoryChart').getContext('2d');
const relatoryChart = new Chart(relatoryCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Relatório (em milhares)',
            data: [12, 19, 3, 5, 2, 3, 7, 10, 5, 12, 14, 20],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: true,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Configurações do gráfico de Distribuição de Usuários
const userCtx = document.getElementById('userChart').getContext('2d');
const userChart = new Chart(userCtx, {
    type: 'pie',
    data: {
        labels: ['Desktop', 'Mobile', 'Tablet'],
        datasets: [{
            label: 'Usuários',
            data: [60, 30, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});

// Configurações do gráfico de Desempenho do Suporte
const supportCtx = document.getElementById('supportChart').getContext('2d');
const supportChart = new Chart(supportCtx, {
    type: 'bar',
    data: {
        labels: ['Atendimentos', 'Resoluções', 'Reaberturas', 'Média de Tempo'],
        datasets: [{
            label: 'Desempenho do Suporte',
            data: [150, 120, 10, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
