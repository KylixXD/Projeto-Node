import ApiService from "./api.service.js";

class _CursoService extends ApiService {

    delete({id, onsuccess, onerror}) {
        this.setEndpoint(`/cursos/delete/${id}`);
        $.ajax({
            url: this.makeUrl(),
            method: 'DELETE',  
            success: onsuccess,  
            error: onerror
        });
    }

    update(curso){
        this.setEndpoint(`/cursos/update`);
        $.ajax({
            url: this.makeUrl(),
            type: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify(Object.fromEntries(curso)),
            success: function(response) {
                console.log("Dados enviados com sucesso:", response);
                window.history.back();
            },
            error: function(status, error) {
                console.error("Erro ao enviar dados:", status, error);
            }
        });
    }

    create(curso){
        console.log(curso);
        this.setEndpoint(`/cursos/create`);
        $.ajax({
            url: this.makeUrl(),
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(Object.fromEntries(curso)),
            success: function(response) {
                console.log("Dados criados com sucesso:", response);
                window.history.back();
            },
        });
    }

}

const CursoService = new _CursoService();

export default CursoService;