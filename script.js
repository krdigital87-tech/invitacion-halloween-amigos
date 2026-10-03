document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // ELEMENTOS
    // ==========================================

    const pantallaSobre =
        document.getElementById("pantallaSobre");

    const btnSobre =
        document.getElementById("btnSobre");

    const pantallaInvitacion =
        document.getElementById("pantallaInvitacion");

    const efectoRisas =
        document.getElementById("efectoRisas");


    // ==========================================
    // ABRIR INVITACIÓN
    // ==========================================

    btnSobre.addEventListener("click", function () {

        // Reproducir efecto
        efectoRisas.currentTime = 0;
        efectoRisas.volume = 0.65;

        efectoRisas.play().catch(function (error) {

            console.log(
                "El navegador no permitió reproducir el audio:",
                error
            );

        });


        // Ocultar sobre
        pantallaSobre.style.display = "none";


        // Mostrar invitación
        pantallaInvitacion.style.display = "block";


        // Volver arriba
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    });

});