<script lang=ts>
    import Badge from "$lib/components/ui/badge/badge.svelte";
	import * as Card from "$lib/components/ui/card";
	import A from "$lib/md/a.svelte";
    import projects from "$lib/projects.json";
</script>
{#each projects as project}
<Card.Root class="shadow shadow-foreground">
    <Card.Header>
      <Card.Title>{project.name}</Card.Title>
      {#if project.wip}
      <Card.Description>
        <Badge class="bg-yellow-400">wip</Badge>
        </Card.Description>
      {/if}
    </Card.Header>
    <Card.Content>
      <p>{project.description}</p>
    </Card.Content>
    <Card.Footer>
      <A rel="me" href={project.link}>{project.link}</A>
    </Card.Footer>
  </Card.Root>
{/each}