let db = { itens: [], movimentacoes: [] };

function carregarDB() {
    const salvo = localStorage.getItem('almoxarifado_profissional');
    if (salvo) db = JSON.parse(salvo);
    else {
        db.itens = [
            { id: 1, categoria: "Teclado", marca: "Logitech", descricao: "Teclado Mecânico K380", patrimonio: "PAT-2026001", quantidade: 12, status: "Em estoque" },
            { id: 2, categoria: "Monitor", marca: "Dell", descricao: "Monitor 24\" P2422H", patrimonio: "PAT-2026002", quantidade: 5, status: "Em estoque" },
            { id: 3, categoria: "Mouse", marca: "Logitech", descricao: "Mouse sem fio M185", patrimonio: "PAT-2026003", quantidade: 15, status: "Em estoque" }
        ];
        salvarDB();
    }
}

function salvarDB() {
    localStorage.setItem('almoxarifado_profissional', JSON.stringify(db));
}