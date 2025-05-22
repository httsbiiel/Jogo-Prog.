const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Platform.Exps.VectorX,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Text.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{ground: 0},
	{coin: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{character: 0},
	{petrol: 0},
	{Texto: 0},
	{woodchest: 0},
	{Sprite2: 0},
	{Door: 0},
	{Texto2: 0}
];

self.InstanceType = {
	ground: class extends self.ISpriteInstance {},
	coin: class extends self.ISpriteInstance {},
	character: class extends self.ISpriteInstance {},
	petrol: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	woodchest: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Door: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {}
}