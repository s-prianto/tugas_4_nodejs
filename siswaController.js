//siswaController.js

//import siswaModel
Siswa = require('./siswaModel');

//handle index actions
exports.index = (req,res)=>{
	Siswa.get((err,siswa_1)=>{
		if(err){
			res.json({
				status:"error",
				message:err
			})
		}
		res.json({
			status:"Success",
			message:"Data Siswa Berhasil Dimunculkan",
			data : siswa_1
		})
	})
}

//handle create siswa actions
exports.new= (req,res)=>{
	var siswa = new Siswa();
	siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
	siswa.tanggallahir = req.body.tanggallahir;
	siswa.jeniskelamin = req.body.jeniskelamin;
	siswa.hobi = req.body.hobi;

	//save the contact and check for error;
	siswa.save((err)=>{
		// if(err)
		// res.json(err);
		res.json({
			message:"Siswa Baru Berhasil ditambahkan",
			data:siswa
		});
	});
};

//handle view siswa info
exports.view = (req,res)=>{
	Siswa.findById(req.params.siswa_id,(err,siswa)=>{
		if(err)
		res.send(err);
		res.json({
			message : "Siswa details loadings",
			data : Siswa
		});
	});
}

//handle update siswa info
exports.update = (req,res) =>{
	Siswa.findById(req.params.siswa_id, (err,siswa)=>{
		if(err)
		res.send(err);
		siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
		siswa.tanggallahir = req.body.tanggallahir;
		siswa.jeniskelamin = req.body.jeniskelamin;
		siswa.hobi = req.body.hobi;

		//save the siswa and check errors
		siswa.save((err)=>{
			if(err)
			res.json(err),
			res.json({
				message:"Siswa Berhasil diupdate",
				data : siswa
			});
		});
	});
}

//handle delete siswa info
exports.delete = (req,res) =>{
	Siswa.remove({_id : req.params.siswa_id}, (err,siswa)=>{
		if(err)
		res.send(err);
		res.json({
			status:"success",
			message:"Siswa Berhasil di delete"
		})
	});
}
