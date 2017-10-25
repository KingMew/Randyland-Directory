export default function getEpisodeHash(episode) {
	return "#"+(episode.group.toLowerCase() + "/" + episode.title.toLowerCase()).replace(/\s/g,'-').replace(/'/g,'%27');
}
