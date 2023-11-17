SELECT
        object_id 
      , ra
      , dec
      , g_cmodel_mag
      , g_cmodel_magerr
      , r_cmodel_mag
      , r_cmodel_magerr
      , i_cmodel_mag
      , i_cmodel_magerr
      , z_cmodel_mag
      , z_cmodel_magerr
      , y_cmodel_mag
      , y_cmodel_magerr
  	  , photoz_mean
  	  , photoz_best
  	  , photoz_mc
  	  , photoz_std_best
  	  , photoz_std_mean
  	  , photoz_risk_mean
  	  , photoz_risk_median
  	  , photoz_risk_best
  	  , photoz_err68_min
  	  , photoz_err68_max
  	  , photoz_err95_min
  	  , photoz_err95_max
  	  , stellar_mass
  	  , stellar_mass_err68_min
  	  , stellar_mass_err68_max
  	  , sfr
  	  , sfr_err68_min
  	  , sfr_err68_max
	  
	  
    FROM
        pdr3_wide.forced
	LEFT JOIN pdr3_wide.photoz_demp USING (object_id)
--	LEFT JOIN pdr3_wide.photoz_dnnz USING (object_id)
--	LEFT JOIN pdr3_wide.photoz_mizuki USING (object_id)
--	LEFT JOIN pdr3_wide.specz USING (object_id) 
    WHERE
    isprimary
    AND conesearch(coord, 247.44, 43.82, 630)
--  AND NOT i_cmodel_flag
--  AND NOT r_cmodel_flag
	
	AND r_cmodel_mag < 22.956085

  	-- General failure flag, set if anything went wrong
  	AND NOT g_pixelflags
  	AND NOT r_pixelflags
  	AND NOT i_pixelflags
  	AND NOT z_pixelflags
  	AND NOT y_pixelflags
	
-- 	Source's center is close to suspect pixels
  	AND NOT g_pixelflags_suspectcenter
  	AND NOT r_pixelflags_suspectcenter
  	AND NOT i_pixelflags_suspectcenter
  	AND NOT z_pixelflags_suspectcenter
  	AND NOT y_pixelflags_suspectcenter
	
	-- Source center is close to SENSOR_EDGE pixels
  	AND NOT g_pixelflags_sensor_edgecenter
  	AND NOT r_pixelflags_sensor_edgecenter
  	AND NOT i_pixelflags_sensor_edgecenter
  	AND NOT z_pixelflags_sensor_edgecenter
  	AND NOT y_pixelflags_sensor_edgecenter

  	-- Interpolated pixel in the Source center
--  	AND NOT g_pixelflags_interpolatedcenter
--  	AND NOT r_pixelflags_interpolatedcenter
--  	AND NOT i_pixelflags_interpolatedcenter
--  	AND NOT z_pixelflags_interpolatedcenter
--  	AND NOT y_pixelflags_interpolatedcenter

  	-- Saturated pixel in the Source center
--  	AND NOT g_pixelflags_saturatedcenter
--  	AND NOT r_pixelflags_saturatedcenter
--  	AND NOT i_pixelflags_saturatedcenter
--  	AND NOT z_pixelflags_saturatedcenter
--  	AND NOT y_pixelflags_saturatedcenter

  	-- Cosmic ray in the Source center
  	AND NOT g_pixelflags_crcenter
  	AND NOT r_pixelflags_crcenter
  	AND NOT i_pixelflags_crcenter
  	AND NOT z_pixelflags_crcenter
  	AND NOT y_pixelflags_crcenter
;
