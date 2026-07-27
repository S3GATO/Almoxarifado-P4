function renderizarEstoque() {
    let html = `
        <h2>📋 Estoque Atual</h2>
        <div class="card">
            <table class="table">
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Descrição</th>
                        <th>Marca</th>
                        <th>Patrimônio</th>
                        <th>Quantidade</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>`;

    if (db.itens.length === 0) {
        html += `<tr><td colspan="6" style="text-align:center;padding:40px;">Nenhum item cadastrado ainda.</td></tr>`;
    } else {
        db.itens.forEach(item => {
            html += `
                <tr>
                    <td><strong>${item.categoria}</strong></td>
                    <td>${item.descricao}</td>
                    <td>${item.marca}</td>
                    <td>${item.patrimonio}</td>
                    <td style="font-size:18px;font-weight:600;color:#1e40af;">${item.quantidade}</td>
                    <td><span style="background:#ecfdf5;color:#10b981;padding:6px 14px;border-radius:9999px;font-size:13px;">${item.status}</span></td>
                </tr>`;
        });
    }

    html += `</tbody></table></div>`;
    document.getElementById('conteudo').innerHTML = html;
}