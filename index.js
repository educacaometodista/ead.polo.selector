
// POLO SELECTOR
//
// GitHub: https://github.com/educacaometodista/ead.polo.selector
//
// Autor: Léu Almeida (leunardo.dev)

import data from './data.js';

const Default = '<option value="default">Escolha o polo mais próximo de você</option>';

(function($) {
  $(document).ready(function() {
    $(`#estado`).change(function() {
      var val = $(this).val();

      // Seta o segundo select conforme definido o estado
      if (val == `default`) {
        $(`#polo`).html(
          `<option value=''>Por favor, selecione o seu estado</option>`
        );
      } 
      
      else if (val == `AL`) {
        $(`#polo`).html(
          `${Default}<option value='${data.al[0].url}'>${data.al[0].title}</option>`
        );
      } 
      
      else if (val == `BA`) {
        $(`#polo`).html(
          `${Default}<option value='${data.ba[0].url}'>${data.ba[0].title}</option><option value='${data.ba[1].url}'>${data.ba[1].title}</option>`
        );
      } 
      
      else if (val == `CE`) {
        $(`#polo`).html(
          `${Default}<option value='${data.ce[0].url}'>${data.ce[0].title}</option>`
        );
      } 
      
      else if (val == `DF`) {
        $(`#polo`).html(
          `${Default}<option value='${data.df[0].url}'>${data.df[0].title}</option><option value='${data.df[1].url}'>${data.df[1].title}</option>`
        );
      } 
      
      else if (val == `ES`) {
        $(`#polo`).html(
          `${Default}<option value='${data.es[0].url}'>${data.es[0].title}</option><option value='${data.es[1].url}'>${data.es[1].title}</option><option value='${data.es[2].url}'>${data.es[2].title}</option><option value='${data.es[3].url}'>${data.es[3].title}</option><option value='${data.es[4].url}'>${data.es[4].title}</option>`
        );
      } 
      
      else if (val == `GO`) {
        $(`#polo`).html(
          `${Default}<option value='${data.go[0].url}'>${data.go[0].title}</option>`
        );
      } 
      
      else if (val == `MA`) {
        $(`#polo`).html(
          `${Default}<option value='${data.ma[0].url}'>${data.ma[0].title}</option>`
        );
      } 
      
      else if (val == `MT`) {
        $(`#polo`).html(
          `${Default}<option value='${data.mt[0].url}'>${data.mt[0].title}</option><option value='${data.mt[1].url}'>${data.mt[1].title}</option>`
        );
      } 
      
      else if (val == `MG`) {
        $(`#polo`).html(
          `${Default}<option value='${data.mg[0].url}'>${data.mg[0].title}</option><option value='${data.mg[1].url}'>${data.mg[1].title}</option><option value='${data.mg[2].url}'>${data.mg[2].title}</option><option value='${data.mg[3].url}'>${data.mg[3].title}</option><option value='${data.mg[4].url}'>${data.mg[4].title}</option>`
        );
      } 
      
      else if (val == `PA`) {
        $(`#polo`).html(
          `${Default}<option value='${data.pa[0].url}'>${data.pa[0].title}</option>`
        );
      } 
      
      else if (val == `PB`) {
        $(`#polo`).html(
          `${Default}<option value='${data.pb[0].url}'>${data.pb[0].title}</option><option value='${data.pb[1].url}'>${data.pb[1].title}</option>`
        );
      } 
      
      else if (val == `PR`) {
        $(`#polo`).html(
          `${Default}<option value='${data.pr[0].url}'>${data.pr[0].title}</option>`
        );
      } 
      
      else if (val == `PE`) {
        $(`#polo`).html(
          `${Default}<option value='${data.pe[0].url}'>${data.pe[0].title}</option><option value='${data.pe[1].url}'>${data.pe[1].title}</option><option value='${data.pe[2].url}'>${data.pe[2].title}</option><option value='${data.pe[3].url}'>${data.pe[3].title}</option><option value='${data.pe[4].url}'>${data.pe[4].title}</option><option value='${data.pe[5].url}'>${data.pe[5].title}</option><option value='${data.pe[6].url}'>${data.pe[6].title}</option><option value='${data.pe[7].url}'>${data.pe[7].title}</option><option value='${data.pe[8].url}'>${data.pe[8].title}</option><option value='${data.pe[9].url}'>${data.pe[9].title}</option><option value='${data.pe[10].url}'>${data.pe[10].title}</option><option value='${data.pe[11].url}'>${data.pe[11].title}</option>`
        );
      } 
      
      else if (val == `RJ`) {
        $(`#polo`).html(
          `${Default}<option value='${data.rj[0].url}'>${data.rj[0].title}</option><option value='${data.rj[1].url}'>${data.rj[1].title}</option><option value='${data.rj[2].url}'>${data.rj[2].title}</option><option value='${data.rj[3].url}'>${data.rj[3].title}</option><option value='${data.rj[4].url}'>${data.rj[4].title}</option><option value='${data.rj[5].url}'>${data.rj[5].title}</option><option value='${data.rj[6].url}'>${data.rj[6].title}</option>`
        );
      }
      
      else if (val == `RS`) {
        $(`#polo`).html(
          `${Default}<option value='${data.rs[0].url}'>${data.rs[0].title}</option><option value='${data.rs[1].url}'>${data.rs[1].title}</option><option value='${data.rs[2].url}'>${data.rs[2].title}</option><option value='${data.rs[3].url}'>${data.rs[3].title}</option><option value='${data.rs[4].url}'>${data.rs[4].title}</option>`
        );
      }
      
      else if (val == `RO`) {
        $(`#polo`).html(
          `${Default}<option value='${data.ro[0].url}'>${data.ro[0].title}</option>`
        );
      }
      
      else if (val == `SC`) {
        $(`#polo`).html(
          `${Default}<option value='${data.sc[0].url}'>${data.sc[0].title}</option>`
        );
      }
      
      else if (val == `SP`) {
        $(`#polo`).html(
          `${Default}<option value='${data.sp[0].url}'>${data.sp[0].title}</option><option value='${data.sp[1].url}'>${data.sp[1].title}</option><option value='${data.sp[2].url}'>${data.sp[2].title}</option><option value='${data.sp[3].url}'>${data.sp[3].title}</option><option value='${data.sp[4].url}'>${data.sp[4].title}</option><option value='${data.sp[5].url}'>${data.sp[5].title}</option><option value='${data.sp[6].url}'>${data.sp[6].title}</option><option value='${data.sp[7].url}'>${data.sp[7].title}</option><option value='${data.sp[8].url}'>${data.sp[8].title}</option><option value='${data.sp[9].url}'>${data.sp[9].title}</option><option value='${data.sp[10].url}'>${data.sp[10].title}</option><option value='${data.sp[11].url}'>${data.sp[11].title}</option><option value='${data.sp[12].url}'>${data.sp[12].title}</option><option value='${data.sp[13].url}'>${data.sp[13].title}</option><option value='${data.sp[14].url}'>${data.sp[14].title}</option><option value='${data.sp[15].url}'>${data.sp[15].title}</option><option value='${data.sp[16].url}'>${data.sp[16].title}</option><option value='${data.sp[17].url}'>${data.sp[17].title}</option><option value='${data.sp[18].url}'>${data.sp[18].title}</option><option value='${data.sp[19].url}'>${data.sp[19].title}</option><option value='${data.sp[20].url}'>${data.sp[20].title}</option><option value='${data.sp[21].url}'>${data.sp[21].title}</option><option value='${data.sp[22].url}'>${data.sp[22].title}</option><option value='${data.sp[23].url}'>${data.sp[23].title}</option><option value='${data.sp[24].url}'>${data.sp[24].title}</option><option value='${data.sp[25].url}'>${data.sp[25].title}</option><option value='${data.sp[26].url}'>${data.sp[26].title}</option><option value='${data.sp[27].url}'>${data.sp[27].title}</option><option value='${data.sp[28].url}'>${data.sp[28].title}</option><option value='${data.sp[29].url}'>${data.sp[29].title}</option><option value='${data.sp[30].url}'>${data.sp[30].title}</option><option value='${data.sp[31].url}'>${data.sp[31].title}</option><option value='${data.sp[32].url}'>${data.sp[32].title}</option><option value='${data.sp[33].url}'>${data.sp[33].title}</option><option value='${data.sp[34].url}'>${data.sp[34].title}</option><option value='${data.sp[35].url}'>${data.sp[35].title}</option><option value='${data.sp[36].url}'>${data.sp[36].title}</option>`
        );
      }
      
      else if (val == `PADRÃO`) {
        $(`#polo`).html(
          `${Default}<option value='#'>PADRÃO</option>`
        );
      }

    });
  });

  // Redireciona para o polo através do value definido no option
  $(document).ready(function() {
    $("#polo").change(function() {
      location.href = $(this).val();
    });
  });
})(jQuery); // End of Jquery
