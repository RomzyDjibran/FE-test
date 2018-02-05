
    const obj1 = {}; // object form 1
    const obj2 = {}; // object form 2

    // Get value form 1
    function input1(name, val) {
      return obj1[name] = val;
    }

    // Get value form 2
    function input2(name, val) {
      return obj2[name] = val;
    }

    // Submit form 1
    function validate1() {
      if (!obj1.name || obj1.name == '') {
        alert('Nama di form kiri kosong');
      } else if (!obj1.description || obj1.description == '') {
        alert('Description di form kiri kosong');
      } else if (!obj1.address || obj1.address == '') {
        alert('Street di form kiri Kosong');
      } else if (!obj1.city || obj1.city == '') {
        alert('City di form kiri Belum di pilih');
      } else if (!obj1.province || obj1.province == '') {
        alert('Province di form kiri kosong');
      } else if (!obj1.zip_code || obj1.zip_code == '') {
        alert('Zip Code di form kiri kosong');
      } else {
        console.log(obj1);
        $.ajax({
          method: 'POST',
          url: 'http://httpbin.org/post',
          data: obj1
        }).then((obj1) => {
          alert('Terima Kasih');
          console.log('respon',obj1)
          document.getElementById('myForm1').reset();
        }).catch((err) => {
          console.log('----> errs', err)
          alert('Gagal dikirim');
          document.getElementById('myForm1').reset();
        });
      }
    }

    // Submit form 2
    function validate2() {
      if(!obj2.division || obj2.divison == ''){
        alert('Divisi belum di pilih');
      }
      else if (!obj2.name || obj2.name == '') {
        alert('Nama di form kanan belum diisi');
      } else if (!obj2.question || obj2.question == '') {
        alert('Pertanyaan di form kanan  belum diisi');
      } else {
        console.log(obj2);
        $.ajax({
          method: 'POST',
          url:'http://httpbin.org/post',
          data: obj2
        }).then((obj2) => {
          console.log('respon',obj2)
          alert('Terima Kasih');
          document.getElementById('myForm2').reset();
        }).catch((err) => {
          console.log('----> errs', err)
          alert('Gagal dikirim');
          document.getElementById('myForm2').reset();
        });
      }
    }


    // Empty the Form 1 Fields 
    function clearField() {
      document.getElementById("myForm1").reset();
    }

  